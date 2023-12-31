import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { HiOutlineFunnel } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import InputField from "../Signup/CustomComponent/InputField";
import Button from "../Signup/CustomComponent/Button";
// import { TbRubberStamp } from 'react-icons/Tb';
import { BiMinus } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import gettokenaccess from "../../Helper/gettokenaccess";
import axios from "axios";
// import { AxiosInstance } from '../../Helper/AxiosInstance'
// import {AxiosInstance, AxiosWithCredentials} from '../../Helper/AxiosInstance'
// import {axiosWithHeaders} from '../../Helper/AxiosInstance'

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null;
};

const OpenFirstRow = () => {
  let arr = [
    {
      secuirtymetrix: "DashBoard",
      view: false,
      add: false,
      edit: false,
      deleted: true,
      export: true,
    },
    {
      secuirtymetrix: "costActuals",
      view: false,
      add: false,
      edit: false,
      deleted: true,
      export: true,
    },

    {
      secuirtymetrix: "Budget",
      view: false,
      add: false,
      edit: false,
      deleted: true,
      export: true,
      children: [
        {
          aone: "abc",
          atwo: "bcd",
        },
      ],
    },
    {
      secuirtymetrix: "Setting   ",
      view: false,
      add: false,
      edit: false,
      deleted: true,
      export: true,
      children: [
        {
          aone: "mozi",
          atwo: "ali",
        },
      ],
    },
  ];

  return arr;
};

const UserRegister = () => {
  // const { fetchData, users, groups, allRoles, languages, allUsers, usersCount } = Userapis();
  // for delted modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tabState, setTabState] = useState("user");
  const [userdata, SetuserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sequenceValue, setSequenceValue] = useState("");
  //   const [showBudgets, setShowBudgets] = useState(false);
  const [showIcon, setShowIcon] = useState(null);
  const [openDiv, setOpenDiv] = useState(false);
  const [users, setUsers] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });
  const [groups, setGroups] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [currentModal, setCurrentModal] = useState({
    value: "",
    modal: false,
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const iconChange = (index) => {
    console.log(index);
    index === 0 ? setShowIcon(index + 1) : setShowIcon(index - 1);
    // setShowIcon(index)
  };

  // for deleted modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleButtonClick = () => {
    // Logic for button click
    console.log("Button clicked");
    // You can add your specific logic here
    toggleModal(); // Toggle the modal state to close it
  };

  const fetchData = async () => {
    try {
      // const headers = {
      //   'Content-Type': 'application/json',
      //   'Authorization': gettokenaccess() || "moiz "

      //   // 'Authorization': 'Bearer YourAccessToken', // Include any authorization token if required
      // };

      const [
        usersResponse,
        allUsersResponse,
        groupsResponse,
        rolesResponse,
        languagesResponse,
      ] = await Promise.all([
        axios.get(
          `https://test-backend.budgetlab.io/company/users/in/company/?page=${pagination}`,
          {
            headers: {
              Authorization: `Bearer ${gettokenaccess()}`,
            },
          }
        ),

        axios.get(`https://test-backend.budgetlab.io/company/users/all`, {
          headers: {
            Authorization: `Bearer ${gettokenaccess()}`,
          },
        }),

        axios.get(`https://test-backend.budgetlab.io/company/groups/`,{
          headers: {
            Authorization: `Bearer ${gettokenaccess()}`,
          },
        }),
         axios.get(`https://test-backend.budgetlab.io/company/roles/`,{
          headers: {
            Authorization: `Bearer ${gettokenaccess()}`,
          },
        }),
         axios.get(`https://test-backend.budgetlab.io/company/language/`,{
          headers: {
            Authorization: `Bearer ${gettokenaccess()}`,
          },
        }),
      ]);

      setUsers({
        results: usersResponse.data?.results,
        count: usersResponse.data?.count,
        next: usersResponse.data?.next,
        previous: usersResponse.data?.previous,
      });

      setAllUsers(allUsersResponse.data);
      setUsersCount(allUsersResponse.data?.length);
      setGroups(groupsResponse.data);
      setAllRoles(rolesResponse.data);
      setLanguages(languagesResponse.data);
    } catch (error) {
      console.warn("API Error", error);
    }
  };

  useEffect(() => {}, [userdata]);
  useEffect(() => {
    fetchData();
    handleTab("user");
  }, []);

  const openFunnelDiv = () => {
    setOpenDiv(!openDiv);
  };
  const renderTableData = (userdata) => {
    return userdata.map((item, index) => (
      <tr key={index} className="h-20 divide-y divide-gray-200 border">
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
          {item.Name}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
          {item.Groups}
        </td>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
          {item.Roles}
        </td>
        <td className="px-6 py-3 text-center text-xs font-medium text-gray-500">
          {item.status}
        </td>
        <td className="px-6 py-3 text-center font-medium text-gray-500"></td>
      </tr>
    ));
  };

  const handleTab = (value) => {
    setTabState(value);

    if (value === "user") {
      let updatedData = [...userdata];
      updatedData = [];
      updatedData.push({
        heading: ["Name", "Group", "Role", "Status", "Action"],
        data: {
          name: "ABc User",
          group: "Group1",
          role: "manager",
          email: "ab@gmail.com",
        },
      });
      SetuserData(updatedData);
    } else if (value === "Groups") {
      let updatedData = [...userdata];
      updatedData = [];
      updatedData.push({
        heading: ["Group", "Order", "Active", "Default", "Actions"],
        data: [
          {
            admin: "admin",
            num1: "0",
            Active: true,
            Default: true,
            Actions: null,
          },
          {
            admin: "admin",
            num1: "0",
            Active: true,
            Default: true,
            Actions: null,
          },
        ],
      });
      SetuserData(updatedData);
    } else if (value === "Roles") {
      let updatedData = [...userdata];
      updatedData = [];
      updatedData.push({
        heading: ["Group", "Order", "Active", "Default", "Actions"],
        data: {
          name: "ABc User",
          group: "Group1",
          role: "manager",
          email: "ab@gmail.com",
        },
      });
      SetuserData(updatedData);
    }
  };

  const handleOpenModal = (value) => {
    setCurrentModal({
      value: value,
      modal: true,
    });
  };

  const handleCloseModal = () => {
    setCurrentModal({
      value: tabState,
      modal: false,
    });
  };

  return (
    <>
      <div className=" flex justify-center w-full h-auto absolute">
        <div className=" shadow-xl   h-[300px] gap-y-10 w-[1300px] rounded-md relative top-10 left-[130px]">
          <div className=" space-x-10 w-64 items-center  ">
            <nav className="-mp-px flex  space-x-16  mt-8 mb-[13px] pl-2 cursor-pointer ">
              <span
                onClick={() => handleTab("user")}
                className={`hover:font-bold ${
                  tabState === "user" ? "underline" : ""
                }`}
              >
                {" "}
                Users
              </span>
              <span
                onClick={() => handleTab("Groups")}
                className={`hover:font-bold ${
                  tabState === "Groups" ? "underline" : ""
                }`}
              >
                Groups
              </span>
              <span
                onClick={() => handleTab("Roles")}
                className={`hover:font-bold ${
                  tabState === "Roles" ? "underline" : ""
                }`}
              >
                {" "}
                Roles
              </span>

              <div className="flex   justify-end items-end  space-x-4 pl-[874px] ">
                <div>
                  {" "}
                  <BsPlusCircle
                    className="h-5 w-5"
                    onClick={() => handleOpenModal(tabState)}
                  />{" "}
                </div>
                <div>
                  {" "}
                  <HiOutlineFunnel
                    className="h-5 w-6"
                    onClick={openFunnelDiv}
                  />
                  <Modal showModal={showModal} closeModal={closeModal} />
                </div>
              </div>
            </nav>
          </div>
          <hr />

          <div className=" flex items-center  mt-11 px-5 ">
            {/* {user && <table></table>} */}
            <table className="min-w-full border-gray-200 border-2 rounded-lg ">
              <thead className="bg-[#F9FAFB] text-[#6b7280]  rounded-md text-left px-4 h-12 text-sm font-serif  ">
                <tr>
                  {userdata.length > 0
                    ? userdata.map((item, index) => (
                        <React.Fragment key={index}>
                          {item.heading.map((subItem, subIndex) => (
                            <th key={subIndex}>{subItem}</th>
                          ))}
                        </React.Fragment>
                      ))
                    : null}
                </tr>
              </thead>
              <tbody className="bg-white items-center w-100">
                <tr className="h-20 divide-y divide-gray-200 border ">
                  {/* <td>fds</td> */}

                  <td className=" py-3 text-xs font-medium pl-2 text-[#6b7280] text-left">
                    <section className="flex ml-4  ">
                      {" "}
                      <img src="20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z " />
                      <div className="space-x-2 ">
                        {" "}
                        moizbroadthinker543@gmail.com{" "}
                      </div>
                    </section>
                  </td>
                  <td className=" py-3 text-xs font-medium text-[#6b7280]  tracking-wider text-left">
                    Management
                  </td>
                  <td className=" py-3 text-left text-xs font-medium text-[#6b7280]  tracking-wider">
                    Admin
                  </td>
                  <td className=" py-3 text-left text-xs font-medium text-gray-500  ">
                    active
                  </td>
                  <td className=" py-3 text-center font-medium text-[#6b7280] ">
                    <div className="flex space-x-2">
                      <AiFillDelete className="h-5 w-5" onClick={toggleModal} />
                      <HiPencilSquare
                        className="h-5 w-5"
                        onClick={() => handleOpenModal(tabState)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ************************************ Funel Div ********************************* */}

      {openDiv && (
        <div class="relative  z-10 bg-white border rounded-bl-lg rounded-br-lg border-gray-200 shadow-sm   mt-[110px]  w-[1300px] h-64 left-[280px] top-[110px]  ">
          <div className="">
            <div className="flex space-x-[72px]">
              <div className=" space-y-3 mt-5">
                <div>
                  {" "}
                  <span className="text-sm font-bold"> Name</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  ></input>
                </div>
              </div>

              <div className=" space-y-3 mt-5">
                <div>
                  {" "}
                  <span className="text-sm font-bold"> Email</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  ></input>
                </div>
              </div>

              <div className=" space-y-3 mt-5">
                <div>
                  {" "}
                  <span className="text-sm font-bold"> Groups</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  ></input>
                </div>
              </div>

              <div className=" space-y-3 mt-5">
                <div>
                  {" "}
                  <span className="text-sm font-bold"> Roles</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  ></input>
                </div>
                <div>
                  {/* <input type="check" id="checkbox">    </input> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* **********************************************  Deleted Modla ************************************************ */}

      {isModalOpen && (
        <div className=" fixed top-14 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[35rem]">
            {/* Modal content goes here */}
            <div className="flex items-center space-x-3">
              {" "}
              <TiDeleteOutline className="w-8 h-8 bg-red-400  rounded-full" />
              <span className="text-lg font-medium "> Deleted User </span>
            </div>
            <p className="mt-2 ml-1">
              Are you sure you want to delete this group? This action cannot be
              undone.
            </p>

            <div className="flex space-x-2 justify-end">
              <Button onClick={handleButtonClick}>Cancel </Button>
              <Button onClick={toggleModal} className="bg-red-500">
                {" "}
                Deleted{" "}
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentModal.modal === true && (
        <div className="fixed top-12 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          {currentModal.value === "user" ? (
            <div className="bg-white p-8 rounded-lg w-[45rem]">
              <h2 className="text-2xl mb-2">Add Users</h2>
              <hr className="" />

              <div className="w-full">
                <div className="flex space-x-4 w-full">
                  <div className="mt-1 w-1/2">
                    <InputField
                      label="First Name"
                      id="first name"
                      name="first name"
                      type="text"
                      autoComplete="first name"
                      required
                      value=""
                      // onChange={(value) => {
                      //     setSignup((prev) => ({
                      //         ...prev, email: value.target.value
                      //     }))
                      // }}
                    />
                  </div>

                  <div className="mt-1 w-1/2">
                    <InputField
                      label="Last Name"
                      id="last name"
                      name="last name"
                      type="text"
                      autoComplete="last name"
                      required
                      value=""
                      // onChange={(value) => {
                      //     setSignup((prev) => ({
                      //         ...prev, email: value.target.value
                      //     }))
                      // }}
                      className="w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="mt-1 w-1/2">
                    <InputField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      // onChange={(value) => {
                      //     setSignup((prev) => ({
                      //         ...prev, email: value.target.value
                      //     }))
                      // }}
                    />
                  </div>

                  <div className="mt-1 w-1/2">
                    <label
                      for="language"
                      className='class="block text-sm font-medium text-gray-700'
                    >
                      Language{" "}
                    </label>

                    <select
                      className='class="mt-1 block w-full bg-white rounded-md border border-gray-300 px-3 py-2
                  placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                  focus:ring-indigo-500 sm:text-sm undefined"'
                    >
                      <option> English</option>
                      <option> Dutch</option>
                      <option> Arabic</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <span className="font-medium"> Photo</span>

                <div className="flex items-center space-x-6 mt-2">
                  <RiImageAddFill className=" h-8 w-8 " />
                  <Button> Upload</Button>
                </div>
              </div>

              <div className="flex   mt-5  space-x-3 ">
                <div className="mt-1 w-1/2">
                  <label
                    for="language"
                    className='class="block text-sm font-medium text-gray-700'
                  >
                    Groups{" "}
                  </label>

                  <select
                    className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
                          placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                          focus:ring-indigo-500 sm:text-sm undefined"'
                  >
                    <option> Maangement</option>
                    <option> Dutch</option>
                    <option> Arabic</option>
                  </select>
                </div>

                <div className="mt-1  w-1/2">
                  <label
                    for="language"
                    className='class="block text-sm font-medium text-gray-700'
                  >
                    Roles{" "}
                  </label>

                  <select
                    className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
                          placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                          focus:ring-indigo-500 sm:text-sm undefined"'
                  >
                    <option> Budget Holder</option>
                    <option> Dutch</option>
                    <option> Arabic</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center mt-4 space-x-4  pr-2 w-full justify-end   ">
                <Button onClick={handleCloseModal} className="py-2 px-4">
                  Cancel
                </Button>

                <Button className="py-2 px-4 "> Add </Button>
              </div>
            </div>
          ) : currentModal.value === "Groups" ? (
            <div className="bg-white p-8 rounded-lg w-[45rem]">
              <h2 className="text-2xl mb-2">Add Group</h2>
              <hr className="" />

              <div>
                <div className="flex space-x-4 w-full">
                  <div className="mt-1 w-1/2">
                    <InputField
                      label="Name"
                      id="first name"
                      name="first name"
                      type="text"
                      autoComplete="first name"
                      required
                      value=""
                      // onChange={(value) => {
                      //     setSignup((prev) => ({
                      //         ...prev, email: value.target.value
                      //     }))
                      // }}
                    />
                  </div>

                  <div className="mt-1 w-1/2">
                    <InputField
                      label="Order"
                      id="last name"
                      name="last name"
                      type="text"
                      autoComplete="last name"
                      required
                      value=""
                      // onChange={(value) => {
                      //     setSignup((prev) => ({
                      //         ...prev, email: value.target.value
                      //     }))
                      // }}
                      className="w-[200px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-[72px]">
                <div className=" space-y-3 mt-5">
                  <div>
                    {" "}
                    <span className="text-xl"> Ledger accounts</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    ></input>
                  </div>
                  <div>
                    {" "}
                    <span className="text-sm"> No Option Available </span>
                  </div>
                </div>

                <div className=" space-y-3 mt-5">
                  <div>
                    {" "}
                    <span className="text-xl"> Cost center</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    ></input>
                  </div>
                  <div>
                    {" "}
                    <span className="text-sm"> No Option Available </span>
                  </div>
                </div>

                <div className=" space-y-3 mt-5">
                  <div>
                    {" "}
                    <span className="text-xl"> Budget Statuses</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded appearance-none placeholder-gray-400 focus:outline-none border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    ></input>
                  </div>
                  <div>
                    {/* <input type="check" id="checkbox">    </input> */}
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-20 space-x-4  pr-2 w-full justify-end   ">
                <Button onClick={handleCloseModal} className="py-2 px-4">
                  Cancel
                </Button>

                <Button className="py-2 px-4 "> Add </Button>
              </div>
            </div>
          ) : (
            currentModal.value === "Roles" && (
              <div className="bg-white p-8 rounded-lg w-[50rem] ">
                <h2 className="text-2xl mb-2">Add Roles</h2>
                <hr className="" />

                <div className="flex space-x-4 mt-5">
                  <div className="mt-1 w-1/2">
                    <InputField
                      label="Name"
                      id="first name"
                      name="first name"
                      type="text"
                      autoComplete="first name"
                      required
                      value=""
                    />
                  </div>

                  <div className="mt-1 w-1/2 ">
                    <InputField
                      label="sort order"
                      id="sequence"
                      name="sequence"
                      type="number"
                      required
                      value={sequenceValue}
                      min="0"
                      max="50"
                      onChange={(e) => setSequenceValue(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="rounded  border-gray-200 border-2 mt-14 ">
                    <table className="  divide-y divide-gray-200 w-full ">
                      <thead className="bg-gray-50 h-12">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Security Matrix
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            View
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Add
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                          </th>
                          <th className="px-6 py-3 text-center     text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deleted
                          </th>
                          <th className="px-6 py-3 text-center     text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Export
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {OpenFirstRow().map((item, index) => {
                          return (
                            <tr className="h-14 divide-y divide-gray-200 border">
                              <td className="px-6 py-3 text-left text-xs font-medium text-slate-950 tracking-wider">
                                {item?.children ? (
                                  showIcon === index ? (
                                    <BsPlusCircle
                                      onClick={() => setShowIcon(index)}
                                    />
                                  ) : (
                                    <BiMinus
                                      onClick={() => setShowIcon(null)}
                                    />
                                  )
                                ) : null}

                                {item.secuirtymetrix}
                              </td>
                              <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  checked={item.view}
                                />
                              </td>
                              <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  checked={item.add}
                                />
                              </td>
                              <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 ">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  checked={item.edit}
                                />
                              </td>
                              <td className="px-6 py-3 text-center font-medium text-gray-500 ">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  checked={item.deleted}
                                />
                              </td>
                              <td className="px-6 py-3 text-center font-medium text-gray-500 ">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  checked={item.export}
                                />
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr  className='h-12 divide-y divide-gray-200 border'>
                            <td className='px-6 py-3 text-left text-xs font-medium text-slate-950  tracking-wider'>
                                DashBoard
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center text-xs font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                        </tr> */}

                        {/* <tr className='h-12 divide-y divide-gray-200 border'>
                            <td className='px-6 py-3 text-left text-xs font-medium text-slate-950  tracking-wider'>
                                Actuals
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center text-xs font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                        </tr> */}

                        {/* <tr className='h-12 divide-y divide-gray-200 border'>
                            <td  className='px-6 py-3 text-left text-xs font-medium text-slate-950  tracking-wider'>
                                 Budgets
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center text-xs font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                            <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                            <input type='checkbox' />
                            </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex items-center mt-4 space-x-4  pr-2 w-full justify-end   ">
                  <Button onClick={handleCloseModal} className="py-2 px-4">
                    Cancel
                  </Button>

                  <Button className="py-2 px-4 "> Add </Button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default UserRegister;

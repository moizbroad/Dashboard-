import React, { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs'
import { HiOutlineFunnel } from 'react-icons/hi2'
import { HiPencilSquare } from 'react-icons/hi2'
import { AiFillDelete } from 'react-icons/ai'
import InputField from '../Signup/CustomComponent/InputField'


const Modal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className="fixed top-12 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Add Users</h2>
                <hr className='' />

                <div className='' >

                    <div className='flex space-x-80'>
                    <div className="mt-1">

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


                    <div className="mt-1 ">

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

                    <div className='flex space-x-80'>
                    <div className="mt-1">

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

                    <div className="mt-1">

                        <InputField
                            label="Language"
                            id="language"
                            name="language"
                            type="text"
                            autoComplete="language"
                            required
                            value=""
                            // onChange={(value) => {
                            //     setSignup((prev) => ({
                            //         ...prev, email: value.target.value
                            //     }))
                            // }}
                        />
                    </div>
                    </div>
                </div>

                <button
                    onClick={closeModal}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Close Modal
                </button>
            </div>
        </div>
    );
};

const UserRegister = () => {

    const [tabState, setTabState] = useState('user')
    const [userdata, SetuserData] = useState([])
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
    }, [userdata])
    useEffect(() => {
        handleTab('user')
    }, [])

    const renderTableData = (userdata) => {
        return userdata.map((item, index) => (
            <tr key={index} className='h-20 divide-y divide-gray-200 border'>
                <td className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                    {item.Name}
                </td>
                <td className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                    {item.Groups}
                </td>
                <td className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                    {item.Roles}
                </td>
                <td className='px-6 py-3 text-center text-xs font-medium text-gray-500'>
                    {item.status}
                </td>
                <td className='px-6 py-3 text-center font-medium text-gray-500'></td>
            </tr>
        ));
    };

    const handleTab = (value) => {
        if (value === 'user') {
            let updatedData = [...userdata];
            updatedData = []
            updatedData.push({
                heading: ['Name', 'Group', 'Role', 'Status', 'Action'],
                data: {
                    name: 'ABc User',
                    group: 'Group1',
                    role: 'manager',
                    email: 'ab@gmail.com'
                }
            });
            SetuserData(updatedData);
        }
        else if (value === 'Groups') {
            let updatedData = [...userdata];
            updatedData = []
            updatedData.push({
                heading: ['Group', 'Order', 'Active', 'Default', 'Actions'],
                data: {
                    name: 'ABc User',
                    group: 'Group1',
                    role: 'manager',
                    email: 'ab@gmail.com'
                }
            });
            SetuserData(updatedData);
        }

        else if (value === 'Roles') {
            let updatedData = [...userdata];
            updatedData = []
            updatedData.push({
                heading: ['Group', 'Order', 'Active', 'Default', 'Actions'],
                data: {
                    name: 'ABc User',
                    group: 'Group1',
                    role: 'manager',
                    email: 'ab@gmail.com'
                }
            });
            SetuserData(updatedData);
        }
    }



    return (

        <>

            <div className=' shadow-xl  ml-[400px] mr-32  mt-28 h-[250px] gap-y-10 w-[1300px]'>
                <div className=' space-x-10 w-64 items-center  ' >
                    <nav className='-mp-px flex  space-x-16  mt-8 mb-[13px] pl-2  cursor-pointer ' >
                        <span onClick={() => handleTab('user')} className=' hover:font-bold'> Users</span>
                        <span onClick={() => handleTab('Groups')} className=' hover:font-bold'>Groups</span>
                        <span onClick={() => handleTab('Roles')} className=' hover:font-bold'> Roles</span>


                        <div className='flex  space-x-6   pl-[400px]  ' >
                            <  BsPlusCircle className='h-5 w-5' onClick={openModal} />
                            <HiOutlineFunnel className='h-5 w-6' />
                            <Modal showModal={showModal} closeModal={closeModal} />
                        </div>
                    </nav>

                </div>
                <hr />


                <div className=' flex items-center rounded-lg mt-11 px-5   '>
                    {/* {user && <table></table>} */}
                    <table className='min-w-full border-gray-200 border-2 rounded-lg'>
                        <thead className='bg-gray-50  rounded-lg '>
                            <tr >
                                {userdata.length > 0 ? (
                                    userdata.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item.heading.map((subItem, subIndex) => (
                                                <th key={subIndex}>{subItem}</th>
                                            ))}
                                        </React.Fragment>
                                    ))
                                ) : null}

                            </tr>
                        </thead>
                        <tbody className='bg-white items-center w-100'>
                            <tr className='h-20 divide-y divide-gray-200 border'>
                                {/* <td>fds</td> */}
                                <td className='px-4 py-3 text-left text-xs font-medium text-slate-950  tracking-wider'>
                                    awanusman493@gmail.com
                                </td>
                                <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                                    Management
                                </td>
                                <td className='px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                                    Admin
                                </td>
                                <td className='px-6 py-3 text-center text-xs font-medium text-gray-500 '>
                                    active
                                </td>
                                <td className='px-6 py-3 text-center font-medium text-gray-500 '>
                                    <div className='flex space-x-2'>
                                        <AiFillDelete className='h-5 w-5' />
                                        <HiPencilSquare className='h-5 w-5' />

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




        </>




    );
};

export default UserRegister;







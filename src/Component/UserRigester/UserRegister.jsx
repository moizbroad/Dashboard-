import React, { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs'
import { HiOutlineFunnel } from 'react-icons/hi2'
import { HiPencilSquare } from 'react-icons/hi2'
import { AiFillDelete } from 'react-icons/ai'
import { RiImageAddFill } from 'react-icons/ri'
import InputField from '../Signup/CustomComponent/InputField'
import Button from '../Signup/CustomComponent/Button'
import { TbRubberStamp } from 'react-icons/Tb';


const Modal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <>
        </>
        // <div className="fixed top-12 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        //     <div className="bg-white p-8 rounded-lg w-[45rem]" >
        //         <h2 className="text-2xl mb-2">Add Users</h2>
        //         <hr className='' />

        //         <div className='w-full' >

        //             <div className='flex space-x-4 w-full'>
        //                 <div className="mt-1 w-1/2">

        //                     <InputField
        //                         label="First Name"
        //                         id="first name"
        //                         name="first name"
        //                         type="text"
        //                         autoComplete="first name"
        //                         required
        //                         value=""
        //                     // onChange={(value) => {
        //                     //     setSignup((prev) => ({
        //                     //         ...prev, email: value.target.value
        //                     //     }))
        //                     // }}
        //                     />
        //                 </div>


        //                 <div className="mt-1 w-1/2">

        //                     <InputField
        //                         label="Last Name"
        //                         id="last name"
        //                         name="last name"
        //                         type="text"
        //                         autoComplete="last name"
        //                         required
        //                         value=""
        //                         // onChange={(value) => {
        //                         //     setSignup((prev) => ({
        //                         //         ...prev, email: value.target.value
        //                         //     }))
        //                         // }}
        //                         className="w-[200px]"
        //                     />
        //                 </div>
        //             </div>

        //             <div className='flex space-x-4'>
        //                 <div className="mt-1 w-1/2">

        //                     <InputField
        //                         label="Email"
        //                         id="email"
        //                         name="email"
        //                         type="email"
        //                         autoComplete="email"
        //                         required
        //                     // onChange={(value) => {
        //                     //     setSignup((prev) => ({
        //                     //         ...prev, email: value.target.value
        //                     //     }))
        //                     // }}
        //                     />
        //                 </div>


        //                 <div className="mt-1 w-1/2">

        //                     <label for="language" className='class="block text-sm font-medium text-gray-700'>Language </label>

        //                     <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300 px-3 py-2
        //           placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
        //           focus:ring-indigo-500 sm:text-sm undefined"'>

        //                         <option> English</option>
        //                         <option> Dutch</option>
        //                         <option> Arabic</option>

        //                     </select>
        //                 </div>
        //             </div>
        //         </div>





        //         <div className='mt-6'>
        //             <span className='font-medium'> Photo</span>

        //             <div className='flex items-center space-x-6 mt-2'>

        //                 <RiImageAddFill className=' h-8 w-8 ' />
        //                 <Button> Upload</Button>
        //             </div>
        //         </div>


        //         <div className='flex   mt-5  space-x-3 '>
        //             <div className="mt-1 w-1/2">

        //                 <label for="language" className='class="block text-sm font-medium text-gray-700'>Groups </label>

        //                 <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
        //                   placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
        //                   focus:ring-indigo-500 sm:text-sm undefined"'>

        //                     <option> Maangement</option>
        //                     <option> Dutch</option>
        //                     <option> Arabic</option>

        //                 </select>
        //             </div>


        //             <div className="mt-1  w-1/2">

        //                 <label for="language" className='class="block text-sm font-medium text-gray-700'>Roles </label>

        //                 <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
        //                   placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
        //                   focus:ring-indigo-500 sm:text-sm undefined"'>

        //                     <option> Budget Holder</option>
        //                     <option> Dutch</option>
        //                     <option> Arabic</option>

        //                 </select>
        //             </div>
        //         </div>



        //             <div className='flex items-center mt-4 space-x-4  pr-2 w-full justify-end   '>
        //         <Button
        //             onClick={closeModal}
                    
        //         className="py-2 px-4">
        //             Cancel
        //         </Button>

        //         <Button className="py-2 px-4 "> Add </Button>
        //         </div>


        //     </div>



        // </div>
    );
};

const UserRegister = () => {

    const [tabState, setTabState] = useState('user')
    const [userdata, SetuserData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [ currentModal, setCurrentModal] = useState({
        value: "",
        modal: false
    }
)
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
        setTabState(value)

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

    const handleOpenModal = (value) => {
        setCurrentModal({
            value: value,
            modal: true
        })
    }
    
    const handleCloseModal = () => {
        setCurrentModal({
            value: tabState,
            modal: false
        })
    }



    return (

        <>
            <div className=' w-full h-auto'>
                <div className=' shadow-xl  ml-[300px] mr-32  mt-48 h-[250px] gap-y-10 w-[1000px]'>
                    <div className=' space-x-10 w-64 items-center  ' >
                        <nav className='-mp-px flex  space-x-16  mt-8 mb-[13px] pl-2  cursor-pointer ' >
                            <span onClick={() => handleTab('user')} className=' hover:font-bold'> Users</span>
                            <span onClick={() => handleTab('Groups')} className=' hover:font-bold'>Groups</span>
                            <span onClick={() => handleTab('Roles')} className=' hover:font-bold'> Roles</span>


                            <div className='flex   justify-end  space-x-4 pl-[580px]' >
                                <  BsPlusCircle className='h-5 w-5' onClick={() => handleOpenModal(tabState)} />
                                <HiOutlineFunnel className='h-5 w-6' />
                                <Modal showModal={showModal} closeModal={closeModal} />
                            </div>
                        </nav>

                    </div>
                    <hr />


                    <div className=' flex items-center rounded-lg mt-11 px-5   '>
                        {/* {user && <table></table>} */}
                        <table className='min-w-full border-gray-200 border-2 rounded-lg'>
                            <thead className='bg-gray-50  rounded-lg text-left px-4 h-12  '>
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
                                    <td className=' py-3 text-xs font-medium text-slate-950  tracking-wider text-left'>
                                        awanusman493@gmail.com
                                    </td>
                                    <td className=' py-3 text-xs font-medium text-gray-500  tracking-wider text-left'>
                                        Management
                                    </td>
                                    <td className=' py-3 text-left text-xs font-medium text-gray-500  tracking-wider'>
                                        Admin
                                    </td>
                                    <td className=' py-3 text-left text-xs font-medium text-gray-500 '>
                                        active
                                    </td>
                                    <td className=' py-3 text-center font-medium text-gray-500 '>
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
            </div>


            {currentModal.modal === true && <div className="fixed top-12 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                {currentModal.value === 'user' ? <div className="bg-white p-8 rounded-lg w-[45rem]" >
                <h2 className="text-2xl mb-2">Add Users</h2>
                <hr className='' />

                <div className='w-full' >

                    <div className='flex space-x-4 w-full'>
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

                    <div className='flex space-x-4'>
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

                            <label for="language" className='class="block text-sm font-medium text-gray-700'>Language </label>

                            <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300 px-3 py-2
                  placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                  focus:ring-indigo-500 sm:text-sm undefined"'>

                                <option> English</option>
                                <option> Dutch</option>
                                <option> Arabic</option>

                            </select>
                        </div>
                    </div>
                </div>





                <div className='mt-6'>
                    <span className='font-medium'> Photo</span>

                    <div className='flex items-center space-x-6 mt-2'>

                        <RiImageAddFill className=' h-8 w-8 ' />
                        <Button> Upload</Button>
                    </div>
                </div>


                <div className='flex   mt-5  space-x-3 '>
                    <div className="mt-1 w-1/2">

                        <label for="language" className='class="block text-sm font-medium text-gray-700'>Groups </label>

                        <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
                          placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                          focus:ring-indigo-500 sm:text-sm undefined"'>

                            <option> Maangement</option>
                            <option> Dutch</option>
                            <option> Arabic</option>

                        </select>
                    </div>


                    <div className="mt-1  w-1/2">

                        <label for="language" className='class="block text-sm font-medium text-gray-700'>Roles </label>

                        <select className='class="mt-1 block w-full bg-white rounded-md border border-gray-300      px-3 py-2
                          placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none
                          focus:ring-indigo-500 sm:text-sm undefined"'>

                            <option> Budget Holder</option>
                            <option> Dutch</option>
                            <option> Arabic</option>

                        </select>
                    </div>
                </div>



                    <div className='flex items-center mt-4 space-x-4  pr-2 w-full justify-end   '>
                <Button
                    onClick={handleCloseModal}
                    
                className="py-2 px-4">
                    Cancel
                </Button>

                <Button className="py-2 px-4 "> Add </Button>
                </div>


            </div> : currentModal.value === 'Groups' ?  <div className="bg-white p-8 rounded-lg w-[45rem]" >
                <h2 className="text-2xl mb-2">Add Group</h2>
                <hr className='' />




                    <div className='flex items-center mt-4 space-x-4  pr-2 w-full justify-end   '>
                <Button
                    onClick={handleCloseModal}
                    
                className="py-2 px-4">
                    Cancel
                </Button>

                <Button className="py-2 px-4 "> Add </Button>
                </div>


            </div> : currentModal.value === 'Roles' &&  <div className="bg-white p-8 rounded-lg w-[45rem]" >
                <h2 className="text-2xl mb-2">Add Roles</h2>
                <hr className='' />



                    <div className='flex items-center mt-4 space-x-4  pr-2 w-full justify-end   '>
                <Button
                    onClick={handleCloseModal}
                    
                className="py-2 px-4">
                    Cancel
                </Button>

                <Button className="py-2 px-4 "> Add </Button>
                </div>


            </div>}
           



        </div>}


        </>




    );
};

export default UserRegister;







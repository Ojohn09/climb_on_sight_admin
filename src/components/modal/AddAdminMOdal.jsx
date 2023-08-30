import { MdClose } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { closeMultiModal } from "../../redux/slices/features/multiModalSlice";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setCurrentStep, setFormData, resetFormState } from "../../redux/slices/features/adminFormSlice";

function AddAdminMOdal({ id }) {
    const dispatch = useDispatch();//dispatching the action
    const { currentStep, formData } = useSelector((state) => state.adminForm)


    const handleClose = () => {
        dispatch(closeMultiModal(id));
    };

    // validation schema
    const validationSchema = Yup.object().shape({
        adminName: Yup.string().required('Admin name is required'),
        adminEmail: Yup.string().email('Invalid email').required('Email is required'),
        adminPassword: Yup.string()
            .required("Please enter a password")
            .min(8, "Password must have at least 8 characters")
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter'),
        selectedOptions: Yup.array().min(1, 'Please select at least one option'),

    });


    const handleDivToggle = (divText) => {
        // Toggle the selection status of the clicked option
        const newSelectedOptions = formData.selectedOptions.includes(divText)
            ? formData.selectedOptions.filter(option => option !== divText)
            : [...formData.selectedOptions, divText];

        // Update the selected options in the formData object
        const updatedFormData = {
            ...formData,
            selectedOptions: newSelectedOptions
        };

        // Dispatch the action with the updated formData
        dispatch(setFormData(updatedFormData));
        console.log("Selected Options:", updatedFormData);
    };


    // Function to check if an option is selected
    const isOptionSelected = (divText) => formData.selectedOptions.includes(divText);

    const handleSubmit = (values) => {
        if (currentStep === 1) {
            dispatch(setFormData(values));
            dispatch(setCurrentStep(2));
        } else if (currentStep === 2) {
            const finalFormData = { ...formData, ...values };
            dispatch(setFormData(finalFormData));
            dispatch(setCurrentStep(3));
            // Log the updated form values with selected options
            console.log("Updated Form Values:", finalFormData);
        }
    };


    return (
        <div className="bg-white relative w-full h-auto rounded-3xl 3xl:rounded-[50px] lg:w-[300px] 3xl:w-[600px] p-5 3xl:p-10 text-sm 3xl:text-3xl">

            <p
                onClick={handleClose}
                className={` border absolute top-5 right-3 3xl:top-8 3xl:right-6 w-fit  border-black rounded-full cursor-pointer text-[20px] 3xl:text-[38px] ${currentStep === 3 ? 'hidden' : 'hidden'}`}><MdClose />
            </p>

            <div className="">
                <p className={`text-base 3xl:text-3xl font-semibold mb-3 3xl:mb-8 ${currentStep === 3 ? 'hidden' : ''}`}>Add admins details</p>

                <Formik
                    initialValues={formData}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {formik => (
                        <Form className="flex flex-col gap-4 3xl:gap-8 mt-6">
                            {currentStep === 1 && (
                                <>
                                    <p className={`text-base 3xl:text-3xl mb-3 3xl:mb-14 `}>Fill form</p>

                                    <div className="">
                                        <Field
                                            className='outline-none bg-gray-100 rounded-xl p-3 3xl:p-6 w-full'
                                            type="text"
                                            name="adminName"
                                            placeholder="Admin name" />
                                        <ErrorMessage name="firstName" component="div" className="error" />
                                    </div>

                                    <div className="">
                                        <Field
                                            className='outline-none bg-gray-100 rounded-xl p-3 3xl:p-6 w-full'
                                            type="email"
                                            name="adminEmail"
                                            placeholder="Admin email" />
                                        <ErrorMessage name="lastName" component="div" className="error" />
                                    </div>

                                    <div className="">
                                        <Field
                                            className='outline-none bg-gray-100 rounded-xl p-3 3xl:p-6 w-full'
                                            type="password"
                                            name="adminPassword"
                                            placeholder="Admin password" />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                </>
                            )}
                            {currentStep === 2 && (
                                <>
                                    <p className="text-base 3xl:text-3xl my-3">What would they have access to?</p>
                                    <div className="grid grid-cols-3 gap-4 3xl:gap-8 my-4 3xl:my-8">
                                        <div
                                            onClick={() => handleDivToggle("Events", formik.setFieldValue)}
                                            className={`bg-gray-100 rounded-2xl cursor-pointer p-4 3xl:p-8 text-center   ${isOptionSelected("Events") ? 'bg-blue-400' : ''}`}
                                        >
                                            Events
                                        </div>
                                        <div
                                            onClick={() => handleDivToggle("Climbers", formik.setFieldValue)}
                                            className={`bg-gray-100 rounded-2xl cursor-pointer p-4 3xl:p-8 text-center   ${isOptionSelected("Climbers") ? 'bg-blue-400' : ''}`}
                                        >
                                            Climber
                                        </div>
                                        <div
                                            onClick={() => handleDivToggle("Guides", formik.setFieldValue)}
                                            className={`bg-gray-100 rounded-2xl cursor-pointer p-4 3xl:p-8 text-center   ${isOptionSelected("Guides") ? 'bg-blue-400' : ''}`}
                                        >
                                            Guides
                                        </div>
                                        <div
                                            onClick={() => handleDivToggle("Stats", formik.setFieldValue)}
                                            className={`bg-gray-100 rounded-2xl cursor-pointer p-4 3xl:p-8 text-center   ${isOptionSelected("Stats") ? 'bg-blue-400' : ''}`}
                                        >
                                            Stats
                                        </div>
                                        <div
                                            onClick={() => handleDivToggle("Location", formik.setFieldValue)}
                                            className={`bg-gray-100 rounded-2xl cursor-pointer p-4 3xl:p-8 text-center   ${isOptionSelected("Location") ? 'bg-blue-400' : ''}`}
                                        >
                                            Location
                                        </div>
                                    </div>
                                </>
                            )}




                            {currentStep === 3 && (
                                <div className="text-center flex flex-col items-center gap-3 3xl:gap-8">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 3xl:w-40 3xl:h-40" viewBox="0 0 128 127" fill="none">
                                            <g opacity="0.2">
                                                <path d="M119.896 63.4847C119.896 94.2855 94.9265 119.255 64.1255 119.255C33.3247 119.255 8.35547 94.2855 8.35547 63.4847C8.35547 32.6838 33.3247 7.71484 64.1255 7.71484C94.9265 7.71484 119.896 32.6838 119.896 63.4847Z" fill="#B58563" />
                                            </g>
                                            <path d="M127.5 63.4803C127.5 98.4812 99.1261 126.855 64.125 126.855C29.1241 126.855 0.75 98.4812 0.75 63.4803C0.75 28.4792 29.1241 0.105469 64.125 0.105469C99.1261 0.105469 127.5 28.4792 127.5 63.4803Z" fill="#B58563" />
                                            <path d="M36.1484 63.5989L54.7275 82.1781L92.1009 44.8047" stroke="white" stroke-width="9.14062" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base 3xl:text-3xl font-semibold ">Success</p>
                                    <p className="text-base 3xl:text-3xl">Admin has been added successfully</p>

                                </div>
                            )}



                            {currentStep === 3 ? (
                                <button
                                    className="w-[60%] mx-auto bg-black p-3 3xl:p-6 rounded-2xl text-white"
                                    onClick={handleClose}
                                >
                                    Close
                                </button>
                            ) :
                                (<button
                                    type="button"
                                    className="w-[60%] mx-auto bg-black p-3 3xl:p-6 rounded-2xl text-white"
                                    onClick={() => handleSubmit(formik.values, formik)}
                                >
                                    {currentStep === 1 ? 'Next' : 'Finish'}
                                </button>)}
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default AddAdminMOdal
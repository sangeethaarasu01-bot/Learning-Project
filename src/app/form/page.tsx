'use client'
import React, { useState } from 'react'
import '../css/form.css'
interface FormValues {
  firstname: string
  lastname: string
  email: string
  contact: string
  gender: string
  subject: string
  resume: File | null
  url: string
  about: string
}

 interface FormErrors {
  firstname?: string
  lastname?: string
  email?: string
  contact?: string
  gender?: string
  subject?: string
  resume?: string
  url?: string
  about?: string
 }

const ReactForm = () => {
  const [values, setValues] = useState<FormValues>({
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    gender:'',
    subject:'',
    resume:null,
    url:'',
    about:''
  });
 
  const [errors, setErrors] = useState<FormErrors>({});
  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
    setValues({...values,[e.target.name]:e.target.value})

    setErrors({
      ...errors,[e.target.name]:''
    })
  }
  
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const validationErrors: FormErrors = {}
    
    if(!values.firstname.trim()){
      validationErrors.firstname = 'First name is required';
    }

    if(!values.lastname.trim()){
      validationErrors.lastname = 'Last name is required';
    }

    if(!values.email.trim()){
      validationErrors.email = 'Email is required';
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
      validationErrors.email = 'Email is invalid';
    }

    if(!values.contact.trim()){
      validationErrors.contact = 'Contact number is required';
    }else if(!/^\d{10}$/.test(values.contact)){
      validationErrors.contact = 'Contact number is invalid';
    }

    if(!values.gender.trim()){
      validationErrors.gender = 'Gender is required';
    }

    if(!values.subject.trim()){
      validationErrors.subject = 'Please select your subject';
    }

    if(!values.resume){
      validationErrors.resume = 'Please upload your resume';
    }

    if(!values.url.trim()){
      validationErrors.url = 'URL is required';
    }

    if(!values.about.trim()){
      validationErrors.about = 'Please tell about yourself';
    }
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      alert('Form Data Submitted Successfully');
      resetFun();
    }
  }

  const resetFun=()=>{
    setValues({
      firstname:'',
      lastname:'',
      email:'',
      contact:'',
      gender:'',
      subject:'',
      resume:null,
      url:'',
      about:''
    })
  }
  console.log(values,"values")
  return (
    <div className='container'>
      <h1>React Form</h1>
        <label htmlFor='firstname'>First Name<span className='error'>*</span></label>
        <input 
          type='text' 
          id='firstname' 
          name='firstname'
          placeholder='Enter your first name' 
          onChange={(e)=>handleChange(e)} 
          required
          value={values.firstname}
        />
        {errors.firstname && <span className='error'>{errors.firstname}</span>}
        <label htmlFor='lastname'>Last Name<span className='error'>*</span></label>
        <input 
          type='text' 
          id='lastname' 
          name='lastname' 
          placeholder='Enter your last name' 
          onChange={(e)=>handleChange(e)} 
          required
          value={values.lastname}
        />
        {errors.lastname && <span className='error'>{errors.lastname}</span>}
        <label htmlFor='email'>Email<span className='error'>*</span></label>
        <input 
          type='text' 
          id='email' 
          name='email' 
          placeholder='Enter your email' 
          onChange={(e)=>handleChange(e)} 
          required
          value={values.email}
        />
        {errors.email && <span className='error'>{errors.email}</span>}
        <label htmlFor='contact'>Contact<span className='error'>*</span></label>
        <input 
          type='text' 
          id='contact' 
          name='contact' 
          placeholder='Enter your Contact Number' 
          onChange={(e)=>handleChange(e)} 
          required
          value={values.contact}
        />
        {errors.contact && <span className='error'>{errors.contact}</span>}
        <label htmlFor='gender'>Gender<span className='error'>*</span></label>
        <input 
          type='radio' 
          id='gender' 
          name='gender' 
          onChange={(e)=>handleChange(e)} 
          required
          value='Female'
          checked={values.gender === 'Female'}
        /> Female
        <input 
          type='radio' 
          id='gender' 
          name='gender' 
          onChange={(e)=>handleChange(e)} 
          required
          value='Male'
          checked={values.gender === 'Male'}
        /> Male
        <input 
          type='radio' 
          id='gender' 
          name='gender' 
          onChange={(e)=>handleChange(e)} 
          required
          value='Others'
          checked={values.gender === 'Others' }
        /> Others
        {errors.gender && <span className='error'>{errors.gender}</span>}
        <label htmlFor='subject'>Select Your Best Subject<span className='error'>*</span></label>
        <select 
          id='subject' 
          name='subject' 
          onChange={(e)=>handleChange(e)} 
          value={values.subject}
          required>
            <option value='maths'>Maths</option>
            <option value='science'>Science</option>
            <option value='computer'>Computer</option>
        </select>
        {errors.subject && <span className='error'>{errors.subject}</span>}
        <label htmlFor='resume'>Upload Resume<span className='error'>*</span></label>
        <input 
          type='file' 
          id='resume' 
          name='resume' 
          onChange={(e)=>handleChange(e)} 
          value={values.resume}
          required
        />
        {errors.resume && <span className='error'>{errors.resume}</span>}
        <label htmlFor='url'>Enter URL<span className='error'>*</span></label>
        <input 
          type='text' 
          id='url' 
          name='url' 
          placeholder='Enter your URL'
          onChange={(e)=>handleChange(e)} 
          value={values.url}
          required
        />
        {errors.url && <span className='error'>{errors.url}</span>}
        <label htmlFor='about'>About<span className='error'>*</span></label>
        <textarea 
          id='about' 
          name='about' 
          cols={30} 
          rows={10} 
          placeholder='About your self' 
          onChange={(e)=>handleChange(e)} 
          value={values.about}
          required
        ></textarea>
        {errors.about && <span className='error'>{errors.about}</span>}
        <button className='btn1' type='button' onClick={resetFun}>Reset</button>
        <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ReactForm
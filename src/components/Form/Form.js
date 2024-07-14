import React, { useState } from 'react'
import "./Form.css"

function Form() {
    const[firstName , setFirstName] = useState("");
    const[lastName , setLastName] = useState("");
    const[email , setEmail] = useState("");
    const[contact , setContact] = useState("");
    const[gender , setGender] = useState("male");
    const[subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const[resume , setResume] = useState("");
    const[url , setUrl] = useState();
    const[selectedOption, setSelectedOption] = useState("");
    const[about, setAbout] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectedOption,
            about,
        )
    }

    const handleSubjectChange = (sub)=>{
        setSubjects((prev)=> ({
            ...prev,
            [sub]: !prev[sub],
        }) );
    };

    const handleReset = ()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            physics:false,
            maths: false,
        });
        setResume("");
        setUrl();
        setSelectedOption("");
        setAbout("");
    }

  return (
    <div> 
        <h1>Forms</h1>
        <fieldset>
            <form>
                <label for="firstname">
                    firstName
                </label>
                <input type='text' id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter your FirstName' required></input>
                <label for="lastname">lastname*</label>
                <input type="text" id="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder='Enter your lastname here' required></input>
                <label for="email">email*</label>
                <input type='text' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' required></input>
                <label for="contact">Contact*</label>
                <input type='number' id="contact" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder='Enter contact Number' required></input>
                <label for="gender">
                    gender*
                </label>
                <input type='radio' name='gender' value="male" id='male' checked={gender === "male"} onChange={(e)=>setGender(e.target.value)}/>Male
                <input type='radio' name='gender' value="female" id='female' checked={gender === "female"}onChange={(e)=> setGender(e.target.value)}/>Female
                <input type='radio' name='gender' value="other" id='other' checked={gender === "other"} onChange={(e)=> setGender(e.target.value)}/>Other<br/>
                <label for="lang">Your best subject</label>
                <input type='checkbox' name='lang' id='english' checked={subjects.english === true} onChange={(e)=> handleSubjectChange("english")}/>English
                <input type='checkbox' name='lang' id='maths' checked={subjects.maths === true} onChange={(e)=> handleSubjectChange("maths")}/>Maths
                <input type='checkbox' name='lang' id="physics" checked={subjects.physics === true} onChange={(e)=> handleSubjectChange("physics")}/>Physics
                <br/>
                <label for="upload">
                    Upload Files*
                </label>
                <input type='file' name='file' id='files' onChange={(e)=> setResume(e.target.files[0])} placeholder='Upload files here' required />
                <label for="url">Enter Url</label>
                <input type='url' name='url' id='url' onChange={(e)=> setUrl(e.target.value)} placeholder='Enter Url here' required></input>
                <label>Select Your choice</label>
                <select name='select' id='select' value={selectedOption} onChange={(e)=> setSelectedOption(e.target.value)}>
                    <option value="" disabled selected={selectedOption === ""}>
                       Select Your Ans
                    </option>
                    <optgroup label='Beginners'>
                        <option value="1">HTML</option>
                        <option value="2">CSS</option>
                        <option value="3">JAVASCRIPT</option>
                    </optgroup>
                    <optgroup label='Advance'>
                        <option value="4">Node</option>
                        <option value="5">Express</option>
                        <option value="6">React</option>
                    </optgroup>
                </select>
                <label for="about">About*</label>
                <textarea name='about' id='about' cols={30} rows={10} onChange={(e)=> setAbout(e.target.value)} placeholder='About your self' required/>
                <button type='reset' value="reset" onClick={()=> handleReset()}>Reset</button>
                <button type='submit' value="submit" onClick={(e)=> handleSubmit(e)}>Submit</button>

            </form>
        </fieldset>
    </div>
  )
}

export default Form
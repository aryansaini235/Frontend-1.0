import React, { useCallback, useState , useContext} from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-recaptcha'
import backone from '../assests/images/backone.png'
import logo from '../assests/images/logo.png'
import click from '../assests/images/click.gif'
import login from '../assests/images/login.png'
import {auth, createUserDocument, fireb} from '../fire'

import {AuthContext} from "../Auth.js"
import history from './history'
import { SetUserData } from '../minio/UploadMinio'

const SignupForm = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
z-index: 0;
background: #C4C4C4;
justify-content: center;
display: grid;
align-items: center;
.container{
    max-width: 100%;
}
.main{
    position: relative;
    display: flex;
    height: 721px;
    margin-top:0;
   }
.container h2{
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 20px;
    font-weight: 400;
    color: #2c2d2f;
    text-align: center;
    margin-top: 40px;
}
.content{
    flex-basis: 45%;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0,0,0,0.1);

}
.card{
    width: 90%;
    margin-left: 35px;
    text-align: left;
    border-radius: 10px;
}
.form-img{
    flex-basis: 55%;
    background: url(${backone}) no-repeat center;
    padding-top: 40px;
    background-size: cover;
    align-items: center;
    h2{
      color: #111;
      font-family: "Averta web"
      , Arial, sans-serif;
      line-height: 42px;
      font-weight: 600;
      padding: 0 70px 0 70px;
    }


}
.form-img .img{
    max-width: 600px;
    height: 400px;
    margin: 0 150px 0 150px;
    background: url(${login}) no-repeat center;
    background-size: cover;
}

.form-img-text{
    display: flex;
    justify-content: center;
    padding-top: 30px;
    .logoimg{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background: url(${logo}) no-repeat center;
        background-size: cover;
    }
    a{
        text-decoration: none;
        color: #7849D5;
        padding-left: 20px;
        text-align: left;
    }
    .clickimg{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-top: 33px;
        background: url(${click}) no-repeat center;
        background-size: cover;
    }
}

.fields{
    display: flex;
    padding: 10px;
    label{
        align-items: left;
        color: #505255;
        display: block;
        width: 100px;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        margin-left: 20px;
        padding-top: 10px;
        text-align: right;
        span{
            color: red;
        }
    }
    input{
        align-items: left;
        border-radius:5px;
        border: 1px solid #505255;
        height: 30px;
        display: block;
        width: 70%;
        margin-top: 5px;
        margin-left: 15px;
    }
    select{
        align-items: left;
        border-radius:5px;
        border: 1px solid #505255;
        height: 32px;
        display: block;
        width: 71%;
        margin-top: 5px;
        margin-left: 15px;
        option:first-child{
            display:none;
        }
    }

}
.privacy-field{
    display: flex;
    padding-left: 10px;
    input{
        display: block;
        align-items: right;
        margin-top: 15px;
        margin-left: 100px;
    }
    p{
        display: block;
        color: #505255;
        font-weight: 400;
        width: 440px;
       font-size: 15px;
       line-height: 20px;
       margin-left: 20px;
    }
}
.btn{
    display: block;
    text-align: center;
    padding-top: 15px;
    width: 100%;
}
button{
    width: 180px;
    height: 50px;
    background: #ffffff;
    border-radius: 25px;
    border: 2px solid #C4C4C4;
    font-size: 20px;
    line-height: 33px;
    color: #8f9197;
}
.text{
    color: #2c2d2f;
    display: block;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: 400;
    font-size:15px;
    line-height: 24px;
    a{
        text-decoration: none;
        color: #0854b3;
        font-weight: 600;
    }
}
@media(max-width: 1400px){
    .form-img .img{
        max-width: 90%;
        border: 5px;
        height: 350px;
        margin: 0 40px 0 40px;
    }
    .form-img h2{
      font-size: 1.5rem;
      padding:  0 20px 0 20px;
    }

    .form-img-text{
        .logoimg{
            width: 60px;
            height: 60px;
            border-radius: 30px;
        a{
            padding-left: 20px;
            text-align: left;
        }
        .clickimg{
            width: 30px;
            height: 30px;
            border-radius: 15px;
        }
    }

}
@media(max-width:1024px){
    .form-img{
        h2{
          font-size: 25px;
        }
    }
    .main{
        flex-direction: column;
     }
     .form-img{
         order: 2;
     }
     .content{
       order: 1;
     }
     .card{
        width: 80%;
        margin-top: 30px;
        margin-left: 100px;
        margin-bottom: 10px;
    }
}
@media(max-width: 768px){
    .container h2{
        font-size: 20px;
    }
    .card{
        margin-left: 80px;
    }
    .form-img-text{
        .logoimg{
            width: 80px;
            height: 80px;
            border-radius: 40px;
        }
        a{
          font-size: 28px;
        }
        .clickimg{
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }
    }
}
@media(max-width: 600px){

    .card{
        width: 70%;
    }
    .form-img{
        width: 100%;
        .img{
            max-width: 100%;
        }
        h2{
          font-size: 18px;
          width: 90%;
        }

    }
    .fields{
        padding: 5px;
        label{
            width: 80px;
            font-size: 12px;
        }
        input{
            height: 30px;
            display: block;
            width: 65%;
        }
        select{
            height: 30px;
            display: block;
            width: 66%;
        }

    }
    .btn  button{
        width: 150px;
        height: 40px;
        font-size: 16px;
    }
    .privacy-field{
        padding-left: 0px;
        left: 0;
        p{
            width: 300px;
           font-size: 14px;
        }
    }
}
`

const Signup = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [location, setLocation] = useState("");
    const [business, setBusiness] = useState("");
    
    const getUser = async(uid) =>{
        fireb.firestore().collection('users').doc(uid).get()
        .then(snapshot => {
          var data = snapshot.data();
          var name = data.name;
          var location = data.location;
          var bussiness = data.bussiness;
          var organisation = data.organisation;
          SetUserData({
              name: name,
              location: location,
              business: bussiness,
              organisation: organisation
          });
        })
        }

   

    const handleSubmit = async (e) => {
      e.preventDefault();
        const user = await auth.createUserWithEmailAndPassword(email, password)
        .then((users) => {
            handle(users.user.uid)
        })
        .catch(error => {
            alert(error.message);
        });}

    const handle = async(uid) => {
        fireb.firestore().collection('users').doc(uid).set({
            name: name,
            organisation: organisation,
            location: location,
            business: business,
        })
        .then(() => {
            alert(" You have successfully registered!");
            history.push("/");
            getUser(uid);
        })
        .catch(error => {
            alert(error.message);
        });
        setName("");
        setLocation("");
        setOrganisation("");
        setBusiness("");
    };
    return (
        <SignupForm>
            <div className="container">
                <div className="main">
                    <div className="content">
                        <div className="card">
                            <h2>Get Started with Finvoiced</h2>
                            <form action="" method="post">
                                <div className="fields">
                                    <label>Fullname<span>*</span></label>
                                    <input type="text" name="name" required onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div className="fields">
                                    <label>Organisation<span>*</span></label>
                                    <input type="text" name="organisation" required onChange={(e) => setOrganisation(e.target.value)} ></input>
                                </div>
                                <div className="fields">
                                    <label for="country">Location<span>*</span></label>

                                    <select id="country" name="country" required onChange={(e) => setLocation(e.target.value)}>
                                        <option selected>Choose a country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland Islands">Åland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-bissau">Guinea-bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao">Macao</option>
                                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russian Federation">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-leste">Timor-leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="fields">
                                    <label>Business type<span>*</span></label>
                                    <select id="business" name="business" required onChange={(e) => setBusiness(e.target.value)}>
                                        <option selected>Choose your business type</option>
                                        <option value="corporation">Limited company/Corporation</option>
                                        <option value="charity">Charity/Non-profit</option>
                                        <option value="corporation">Individual/Sole trader</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="trust">Trust</option>
                                    </select>
                                </div>
                                <div className="fields">
                                    <label>Email<span>*</span></label>
                                    <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </div>
                                <div className="fields">
                                    <label>Password<span>*</span></label>
                                    <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)}>
                                    </input>
                                </div>
                                <div className="privacy-field">
                                    <input type="checkbox" name="agreetopolicy" required>
                                    </input>
                                    <p>I agree to the terms of service and understand Finvoiced uses personal data as described in our privacy notice.</p>
                                </div>
                                <div className="btn"><button type="submit" form="form" value="Submit" onClick={(e) => {
                                    handleSubmit(e);

                                }}>Sign up</button></div>
                            </form>


                            <div className="text">Already have an account?<a href="/signin"> Sign in</a></div>
                        </div>
                    </div>
                    <div className="form-img">
                        <div className="img"></div>
                        <h2>Optimised ML models to your exact use cases for extracting key fields from your documents</h2>
                        <div className="form-img-text">
                            <div className="logoimg"></div>
                            <h1><a href="/stories">Finvoice Stories</a></h1>
                            <div className="clickimg"></div>
                        </div>

                    </div>
                </div>
            </div>
        </SignupForm>
    )
}

export default Signup;

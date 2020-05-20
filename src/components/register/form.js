import React from "react"
import styled from "styled-components"

const Form = () => (
  <FormContainer>
    <form
      method="post"
      // action="http://localhost:9000/ReceiveRegistration"
      onSubmit={(event) => {
        console.log('A form was submitted: ', event.target.firstnames.value);
        const user = {
          name: `${event.target.firstnames.value} ${event.target.lastname.value}`,
          age: event.target.age.value,
          email: event.target.email.value,
          country: event.target.country.value,
          experiences: event.target.skillsexperiences.value,
          themes: event.target.themes.value
        }
        fetch("http://localhost:9000/ReceiveRegistration", {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(user),
          mode: "no-cors"
        }).then(function (response) {
          console.log(response)
          return response.json();
        });

        event.preventDefault();
      }}
    >
      <input type="hidden" name="bot-field" />
      <FieldStyle>
        <LabelStyle>First Names</LabelStyle>
        <br />
        <InputStyle type="text" name="firstnames" id="firstnames" required />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Last Name</LabelStyle>
        <br />
        <InputStyle type="text" name="lastname" id="lastname" required />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Email</LabelStyle>
        <br />
        <InputStyle type="email" name="email" id="email" required />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Age</LabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="age"
          id="age1617"
          value="age1617"
          required
        />
        <CheckboxLabelStyle for="age1617">16-17 years</CheckboxLabelStyle>
        <CheckboxStyle
          type="radio"
          name="age"
          id="age1830"
          value="age1830"
          required
        />
        <CheckboxLabelStyle for="age1830">18-30 years</CheckboxLabelStyle>
        <CheckboxStyle
          type="radio"
          name="age"
          id="age3150"
          value="age3150"
          required
        />
        <CheckboxLabelStyle for="age3150">31-50 years</CheckboxLabelStyle>
        <CheckboxStyle
          type="radio"
          name="age"
          id="age51plus"
          value="age51plus"
          required
        />
        <CheckboxLabelStyle for="age51plus">51+ years</CheckboxLabelStyle>
        <br />
        <br />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Country</LabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="country"
          id="greenland"
          value="greenland"
          required
        />
        <CheckboxLabelStyle for="greenland">GREENLAND</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="country"
          id="iceland"
          value="iceland"
          required
        />
        <CheckboxLabelStyle for="iceland">ICELAND</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="country"
          id="faroeislands"
          value="faroeislands"
          required
        />
        <CheckboxLabelStyle for="faroeislands">
          FAROE ISLANDS
        </CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="country"
          id="scotland"
          value="scotland"
          required
        />
        <CheckboxLabelStyle for="scotland">SCOTLAND</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="radio"
          name="country"
          id="coastalnorway"
          value="coastalnorway"
          required
        />
        <CheckboxLabelStyle for="coastalnorway">
          COASTAL NORWAY
        </CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle type="radio" name="country" id="other" value="other" required />
        <CheckboxLabelStyle for="other">OTHER</CheckboxLabelStyle>
        <br />
        <br />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Which themes are you interested in?</LabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="themes"
          id="savelives"
          value="savelives"
          required
        />
        <CheckboxLabelStyle for="savelives">SAVE LIVES</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="themes"
          id="savecommunities"
          value="savecommunities"
          required
        />
        <CheckboxLabelStyle for="savecommunities">
          SAVE COMMUNITIES
        </CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="themes"
          id="savebusinesses"
          value="savebusinesses"
          required
        />
        <CheckboxLabelStyle for="savebusinesses">
          SAVE BUSINESSES
        </CheckboxLabelStyle>
        <br />
        <br />
      </FieldStyle>
      <FieldStyle>
        <LabelStyle>Skills and experiences</LabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="projectmanagement"
          value="projectmanagement"
        />
        <CheckboxLabelStyle for="projectmanagement">
          PROJECT MANAGEMENT
        </CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="health"
          value="health"
        />
        <CheckboxLabelStyle for="health">HEALTH</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="software"
          value="software"
        />
        <CheckboxLabelStyle for="software">SOFTWARE</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="hardware"
          value="hardware"
        />
        <CheckboxLabelStyle for="hardware">HARDWARE</CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="ideageneration"
          value="ideageneration"
        />
        <CheckboxLabelStyle for="ideageneration">
          IDEA GENERATION / CONCEPT DEVELOPMENT
        </CheckboxLabelStyle>
        <br />
        <br />
        <CheckboxStyle
          type="checkbox"
          name="skillsexperiences"
          id="other"
          value="other"
        />
        <CheckboxLabelStyle for="other">
          OTHER, PLEASE SPECIFY
        </CheckboxLabelStyle>
        <InputOtherStyle type="text" name="skillsexperiences_other" />

        <br />
        <br />
      </FieldStyle>
      <DescriptionContainerStyle>
        <DescriptionParagraphStyle>
          The organizers are free to use the submitted videos for marketing
          purposes.
        </DescriptionParagraphStyle>
        <DescriptionParagraphStyle>
          By submitting this form you agree to our Terms and Conditions.
        </DescriptionParagraphStyle>
        <DescriptionParagraphStyle>
          All personal data will be treated in accordance with the{" "}
          <a href="https://gdpr-info.eu/">
            EU's General Data Protection Regulation (GDPR)
          </a>
        </DescriptionParagraphStyle>
        <ButtonStyle type="submit">REGISTER FOR EVENT</ButtonStyle>
      </DescriptionContainerStyle>
    </form>
  </FormContainer>
)

const FormContainer = styled.div`
  display: flex;
  padding: 0 5vw;
  background: #e8e8e8;
`

const FieldStyle = styled.div`
  margin: 20px 0 0 0;
`

const LabelStyle = styled.label`
  color: #006eb6;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 0 2px;
`

const InputStyle = styled.input`
  color: black;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 3px 6px #00000029;
  margin: 0;
  border: 0;
  height: 56px;
  width: 325px;
  padding: 10px;
`

const CheckboxStyle = styled.input`
  padding: 10px;
`

const CheckboxLabelStyle = styled.label`
  color: #006eb6;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`

const InputOtherStyle = styled.input`
  color: black;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 3px 6px #00000029;
  border: 0;
  height: 30px;
  width: 325px;
  padding: 10px;
`

const DescriptionContainerStyle = styled.div`
  margin: 48px 0;
`

const DescriptionParagraphStyle = styled.div`
  position: relative;
  color: #006eb6;
  font-size: 18px;
  margin: 20px 0;
`

const ButtonStyle = styled.button`
  display: block;
  position: relative;
  margin: 40px 0px;
  max-width: 400px;
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`

export default Form

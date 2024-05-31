import React from 'react'
import TeamMembers from '../Components/contactPage/TeamMembers'
import ContactForm from '../Components/contactPage/ContactForm'
import Subscribe from '../Components/contactPage/Subscribe'

const ContactPage: React.FC = () => {
  return (
    <div>
        <TeamMembers />
        <ContactForm />
        <Subscribe />
    </div>
  )
}

export default ContactPage

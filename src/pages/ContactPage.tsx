import React from 'react'
import TeamMembers from '../components/contactPage/TeamMembers'
import ContactForm from '../components/contactPage/ContactForm'
import Subscribe from '../components/contactPage/Subscribe'

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

import { FormPage } from '../../components/FormPage'
import { DonationForm } from '../../components/Forms/donationForm/DonationForm'

export default function Donation() {
  return (
    <FormPage
      title="Donation Request Form"
      description="Please fill out the form below to submit a donation request. We will review your request and get back to you within 5-7 business days."
    >
      <DonationForm />
    </FormPage>
  )
}

import { FormPage } from '../../components/FormPage'
import ApplicationForm from '../../components/Forms/applicationForm/ApplicationForm'

export default function Apply() {
  return (
    <FormPage
      title="Join Our Team"
      description="We're always looking for talented individuals to join our team. Fill out the application below and we'll get back to you soon!"
    >
      <ApplicationForm />
    </FormPage>
  )
}

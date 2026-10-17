import TitleHeader from "../../components/TitleHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex-center section-padding relative">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="card-border rounded-xl p-5 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

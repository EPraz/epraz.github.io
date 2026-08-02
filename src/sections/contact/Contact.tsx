import { EarthCanvas, TitleHeader } from "../../components";
import { ErrorBoundary } from "../../components/errors/ErrorBoundary";
import { SceneErrorFallback } from "../../components/errors/ErrorFallbacks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding relative">
      {/* <StarsCanvas /> */}
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <ContactForm />
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="h-full w-full overflow-hidden rounded-3xl hover:cursor-grab">
              <ErrorBoundary
                fallback={(fallbackProps) => (
                  <SceneErrorFallback
                    {...fallbackProps}
                    label="The interactive globe"
                  />
                )}
              >
                <EarthCanvas />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

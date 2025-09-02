import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modals-toggle-store";


export default function CTASection() {
  const {setIsCollaborateModalOpen} = useModalStore()
  return (
    <section className="w-full flex items-center justify-center relative h-[40dvh] bg-[url(/images/interior-design/cta-bg.jpg)] bg-cover">
      {/* <Image className="w-full h-full" src="/images/interior-design/cta-bg.jpg" height={500} width={1000} alt="CTA Background" /> */}
      <div className="text-3xl md:text-4xl flex flex-col items-center justify-center text-center">
        <p className="">
          Your dream home is just a click away
        </p>
        <Button className="mt-4 md:flex rounded-none border-0 hover:shadow-2 shadow-2 text-lg 4xl:text-3xl py-6 4xl:py-10 capitalize font-thin"
          onClick={()=>{
            setIsCollaborateModalOpen(true);
          }}
        >
          Let's Collaborate
        </Button>
      </div>
    </section>
  )
}
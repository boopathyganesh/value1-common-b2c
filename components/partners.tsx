
import MiniCardRounded from "./ui/miniCard-rounded";

import Meity from '@/public/images/partners/meity.png';
import MeityStartup from '@/public/images/partners/meity-startup.png';
import StartupInd from '@/public/images/partners/startup-india.png';
import AnnaIncubator from '@/public/images/partners/anna-incubator.png';
import VelTBI from '@/public/images/partners/logo_veltech.png';
import Augmont from '@/public/images/partners/augmont-logo.jpg';
import Zolvit from '@/public/images/partners/zolvit.png';
import BIS from '@/public/images/partners/Bureau_of_Indian_Standards_Logo.svg';
import Sequel from '@/public/images/partners/sequel.png';
import Heptre from '@/public/images/partners/heptre.svg';

export default function Partners() {
  return (
    <section className="bg-black/10 w-full">
      <div className="max-w-full px-4 w-full">
        <div className="py-12 h-5/6">

          {/* Section header */}
          <div className="w-full mx-auto text-center pb-6">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl lg:text-5xl ">Trusted by <span className="text-gold-500 px-3 md:px-0">The Best</span> </h2>
          </div>

          {/* Items */}
          <div className="flex flex-wrap items-center justify-center md:px-12 ">
            <div className="flex flex-wrap items-center justify-evenly md:gap-2 md:justify-evenly lg:justify-center md:px-4">
              <MiniCardRounded cardTitle="MeitY" icon={Meity} description="Eco-System Support" />
              <MiniCardRounded cardTitle="MeitY Tide" icon={MeityStartup} description="Grand Support" />
              <MiniCardRounded cardTitle="Startup India" icon={StartupInd} description="Eco-System Support" />
              <MiniCardRounded cardTitle="Anna Incubator" icon={AnnaIncubator} description="Incubation Support" />
              <MiniCardRounded cardTitle="Vel Tech TBI" icon={VelTBI} description="Incubation Support" />
              <MiniCardRounded cardTitle="Augmont" icon={Augmont} description="Gold Partner" />
              <MiniCardRounded cardTitle="Zolvit" icon={Zolvit} description="Compliance Support" />
              <MiniCardRounded cardTitle="BIS" icon={BIS} description="Quality Accreditation" />
              <MiniCardRounded cardTitle="Sequal" icon={Sequel} description="Independent Trustee" />
              <MiniCardRounded cardTitle="Heptre" icon={Heptre} description="Technology Support" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

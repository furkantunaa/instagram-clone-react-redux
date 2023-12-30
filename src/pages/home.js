import { Helmet } from "react-helmet";
import Icon from "components/Icon";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <div className="flex flex-row justify-between ">
        <div className="">
          <div className="mt-7 mb-5 flex justify-start items-start flex-row	">
            <Icon name="home" size={30} />
            <span className="text-black mt-1 m-6 text-xl	"> Ana Sayfa</span>
          </div>
          <div className="mb-3  flex justify-start items-start flex-row">
            <Icon name="search" size={37} />
            <span className="text-black  mt-1 m-8 text-xl"> Ara </span>
          </div>
          <div className="mb-3  flex justify-start items-start flex-row">
            <Icon name="explore" size={30} />
            <span className="text-black  mt-1 m-8 text-xl"> Keşfet</span>
          </div>
          <div className="mb-3  flex justify-start items-start flex-row">
            <Icon name="new" size={30} />
            <span className="text-black mt-1 m-8 text-xl "> Oluştur</span>
          </div>
          <div className="mb-3  flex justify-start items-start flex-row">
            <Icon name="heart" size={30} />
            <span className="text-black  mt-1 m-8 text-xl"> Bildirimler</span>
          </div>
          <div className="mb-3  flex justify-start items-start flex-row">
            <img
              src="/no-avatar.jpeg"
              alt=""
              className="w-9 h-9 rounded-full"
            />
            <span className="text-black  mt-1 m-8 text-xl"> Profil</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-center items-start  mt-3 flex-row">
            <div className="mr-2">
              <img
                src="/no-avatar.jpeg"
                alt=""
                className="w-12 h-12  rounded-full  border-2	 border-red-500 "
              />
              <span>Furkan02</span>
            </div>
            <div className="mr-2">
              <img
                className="w-12 h-12 rounded-full border-2	 border-red-500 "
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
              />
              <span>İpek001</span>
            </div>
            <div className="mr-2">
              <img
                className="w-12 h-12 rounded-full  border-2	 border-red-500"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
              />
              <span>Hakan01</span>
            </div>
            <div className="mr-2">
              <img
                className="w-12 h-12 rounded-full  border-2	 border-red-500"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
              />
              <span>Senemgs</span>
            </div>
            <div className="mr-2">
              <img
                className="w-12 h-12 rounded-full  border-2	 border-red-500"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
              />
              <span>yılmaf01</span>
            </div>
            <div className="ml-1">
              <img
                className="w-12 h-12 rounded-full  border-2	 border-red-500"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
              />
              <span>Salihs</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row">
              <img
                className="w-12 h-12 rounded-full mb-2  border-2	 border-red-500"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
              />
              <span className="font-normal mt-3 ml-2 italic flex justify-start items-start flex-row">
                Amigsode Code
              </span>
            </div>
            <img
              className="h-4/5 w-full	mb-4 text-xs pb-12"
              src="https://scontent.cdninstagram.com/v/t39.30808-6/413833105_676930457978580_6228921507379532821_n.jpg?stp=dst-jpg_e15&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40OTh4NDk4LnNkciJ9&amp;_nc_ht=scontent.cdninstagram.com&amp;_nc_cat=100&amp;_nc_ohc=u_VUPg3Yj18AX8vj4jM&amp;edm=APs17CUAAAAA&amp;ccb=7-5&amp;ig_cache_key=MzI2NzA0NDExMzk5MzcxODY2MA%3D%3D.2-ccb7-5&amp;oh=00_AfAZit63_Q5gTO3o2Aee_W0TX8M4__Gq-E_MohD_f3BGiQ&amp;oe=659108D2&amp;_nc_sid=10d13b"
              class="x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"
            />
          </div>
        </div>
        <div className="flex flex-col mt-14">
          <span className="mb-3 font-semibold">Senin için önerilenler</span>
          <div className="flex flex-row mb-5">
            <img
              className="w-12 h-12 rounded-full  border-2	 border-red-500"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold 	">jack</span>
              <span className="font-semibold text-xs		text-slate-400	">
                Seni takip ediyor
              </span>
            </div>
            <button className="flex justify-end items-end text-right ml-16 mb-3 text-blue-600	">
              Takip et
            </button>
          </div>
          <div className="flex flex-row mb-5">
            <img
              className="w-12 h-12 rounded-full border-2	 border-red-500 "
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold	">Kazuishi</span>
              <span className="font-semibold text-xs		text-slate-400	">
                Susu +5 kişi takip ediyor
              </span>
            </div>
            <button className="flex justify-end items-end  ml-5 mb-3  mt-2 text-right text-blue-600	 ">
              Takip et
            </button>
          </div>
          <div className="flex flex-row mb-5">
            <img
              className="w-12 h-12 rounded-full  border-2	 border-red-500"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold	">semih</span>
              <span className="font-semibold  text-xs		text-slate-400	">
                askın.kerim takip ediyor
              </span>
            </div>
            <button className="flex justify-end items-end  ml-7 text-right text-blue-600	">
              Takip et
            </button>
          </div>
          <div className="flex flex-row mb-5">
            <img
              className="w-12 h-12 rounded-full  border-2	 border-red-500"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold	">ahmet1</span>
              <span className="font-semibold  text-xs		text-slate-400	">
                Seni takip ediyor
              </span>
            </div>
            <button className="flex justify-end ml-16 items-end text-right ml-15 text-blue-600	">
              Takip et
            </button>
          </div>
          <div className="flex flex-row ">
            <img
              className="w-12 h-12 rounded-full  border-2	 border-red-500"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            />
            <div className="flex flex-col ml-3">
              <span className="font-semibold	">Aleyna01</span>
              <span className="font-semibold  text-xs		text-slate-400	">
                Seni takip ediyor
              </span>
            </div>
            <button className="flex justify-end ml-16 mb-2 items-end text-right ml-15 text-blue-600	">
              Takip et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

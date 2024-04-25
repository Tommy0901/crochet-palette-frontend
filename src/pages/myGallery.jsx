import { MainHeader } from "../components/mainHeader"
import { Footer } from "../components/footer";
import { MainContainer, MainWrapper } from "../components/wrapper";
import { Snowfall } from "../assets/snowfall"
import { Honey } from "../assets/honey"
import { Autumn } from "../assets/autumn"
import { Rainbow } from "../assets/rainbow"
import { Granny } from "../assets/granny";
import SlidePhoto from "../components/swiper"; 
import { GetMyCollection } from "../api/GetBrandPaletteData"
import { RenderChosenPalette } from "../pages/myCraftHub"

const myToken = localStorage.getItem("token")

function EachPattern({children, palette}){
  return(
    <>
    <div className="each-pattern">
      {children}
      <div className="pattern-info">
        <div className="palette-info">
          <input className="palette-name" type="text" placeholder="palette-name" defaultValue="teienbiyori"/>
          <div className="fav-palette">{palette}</div>
        </div>
        <button><i className="fa-regular fa-paper-plane"></i></button>
      </div>
    </div>
    </>
  )
}

export default function GalleryPage(){
  const { collections } = GetMyCollection(myToken)
  return(
    <>
    <MainHeader/>
     <MainContainer>
      <MainWrapper>
        <h3># TENENBIYORI</h3>
        <SlidePhoto/>
      </MainWrapper>
      <MainWrapper>
        <h3># My Gallery</h3>
        <div className="pattern-gallery">
          {collections?.map((collection)=>(
          <EachPattern key={collection._id + ":snowfallArea"} 
          palette={<RenderChosenPalette array={collection.colorSchema}/>}>
            <Snowfall key={collection._id + ":snowfall"} path="pattern" first={collection.colorSchema[0]} second={collection.colorSchema[1]} third={collection.colorSchema[2]} fourth={collection.colorSchema[3]}/></EachPattern>))}
          {collections?.map((collection)=>(
          <EachPattern key={collection._id + ":honeyArea"}
          palette={<RenderChosenPalette array={collection.colorSchema}/>}>
            <Honey key={collection._id + ":honey"} path="pattern" first={collection.colorSchema[0]} second={collection.colorSchema[1]} third={collection.colorSchema[2]} fourth={collection.colorSchema[3]}/></EachPattern>))}
          {collections?.map((collection)=>(
          <EachPattern key={collection._id + ":autumnArea"}
          palette={<RenderChosenPalette array={collection.colorSchema}/>}>
            <Autumn key={collection._id + ":autumn"} path="pattern" first={collection.colorSchema[0]} second={collection.colorSchema[1]} third={collection.colorSchema[2]} fourth={collection.colorSchema[3]}/></EachPattern>))}
          {collections?.map((collection)=>(
          <EachPattern key={collection._id + ":grannyArea"}
          palette={<RenderChosenPalette array={collection.colorSchema}/>}>
            <Granny key={collection._id + ":granny"} path="pattern" first={collection.colorSchema[0]} second={collection.colorSchema[1]} third={collection.colorSchema[2]} fourth={collection.colorSchema[3]}/></EachPattern>))}
          {collections?.map((collection)=>(
          <EachPattern key={collection._id + ":rainbowArea"}
          palette={<RenderChosenPalette array={collection.colorSchema}/>}>
            <Rainbow key={collection._id + ":rainbow"} path="pattern" first={collection.colorSchema[0]} second={collection.colorSchema[1]} third={collection.colorSchema[2]} fourth={collection.colorSchema[3]}/></EachPattern>))}
        </div>
      </MainWrapper>
     </MainContainer>
    <Footer bg="main-footer-bg" font="main-footer"/>
    </>
  )
}
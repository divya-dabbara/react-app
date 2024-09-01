import CustomList from "./components/list/list.jsx"
import { CustomOrderedList } from "./components/list/list.jsx"
import { MainHeading, SecondaryHeading } from "./components/heading/headings.jsx"
import CustomImage from "./components/image/image.jsx"
const App=()=>{
  return(
    <>
~      <h1>Version 1</h1>


      <CustomList></CustomList>
      <MainHeading/>
      <SecondaryHeading/>
      <CustomImage></CustomImage>


      <CustomOrderedList/>
    </>
  )
}
export default App
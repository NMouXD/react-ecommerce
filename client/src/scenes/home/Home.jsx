import WhatsAppButton from "../../components/WhatsAppButton";
import ShoppingList from "./ShoppingList";/* 
import ShoppingList from "./ShoppingList"; */
/* import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
 */
function Home() {
  return (
    <div className="home">
      <WhatsAppButton />
      <ShoppingList />
      {/* <Subscribe /> */}
    </div>
  );
}

export default Home;

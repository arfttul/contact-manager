import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Salman F Rahman",
      email: "dorbesh@baba.com",
    },
    {
      id: 2,
      name: "Prince Musa",
      email: "goriber@prince.com",
    },
    {
      id: 3,
      name: "Obaidul Kader",
      email: "are-ara@kara.com",
    },
  ];
  return (
    <div className="">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

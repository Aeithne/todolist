import { useState } from "react";
import { useEffect } from "react";
import TodoCard from "./TodoCard.jsx";
import NewCard from "./NewCard.jsx";
import SearchBar from "./SearchBar.jsx";

function TodoApp() {
  // State hooks
  const [zeroCards, setZeroCards] = useState(true);
  const [cardList, setCardList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [uncheckedList, setUncheckedList] = useState([]);
  const [stateVar, setStateVar] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const checkedCards = cardList.filter((card) => card.isChecked);
  const uncheckedCards = cardList.filter((card) => !card.isChecked);

  const getVisibleCards = () => {

    let visibleCards;

    if(cardList.length === 0) {
      visibleCards = cardList;
    } else if (searchTerm === '') {
      visibleCards = cardList;
    } else if(filteredList.length >= cardList.length) {  
      visibleCards = cardList;  
    } else {
      visibleCards = filteredList;
    }
    return visibleCards;

  }

  const addCard = (card) => {
    let newCard = {
      id: Date.now(),
      isChecked: card.isChecked,
      color: 'white',
      title: card.title,
      details: card.details
    };
        setCardList([...cardList, newCard]);
    };

  const toggleCheck = (id) => {
    const card = cardList.find((c) => c.id === id);
    card.isChecked = !card.isChecked;
    setStateVar(Date.now());
  }

  const deleteCard = (id) => {
      setCardList(cardList.filter((c) => c.id !== id));
  }

  const searchCards = (term) => {
    
    let searchedCards = cardList.filter((card) => {
      return cardMatchesSearch(card, term);
    });

    setSearchTerm(term);
    setFilteredList(searchedCards);
  }

  function cardMatchesSearch(card, term) {

    if (term === '') return true;

    const nameMatches = card.title.toLowerCase().includes(term.toString().toLowerCase());
    const detailsMatches = card.details.toLowerCase().includes(term.toLowerCase());
    
    return nameMatches || detailsMatches;
  }

  return (
    <div>
      <header className="site-header">
        <SearchBar onChange={searchCards} />
      </header>
      <div className="newCard">
        <NewCard addCard={addCard} />
      </div>
      // Checked cards section
      <p className="grid-cards">
        {getVisibleCards().filter(card => card.isChecked)
            .map(card => (
                <TodoCard
                key={card.id} 
                card={card}
                onCheck={() => toggleCheck(card.id)}
                onDelete={() => deleteCard(card.id)} 
                />

            ))}
      </p>
      // Unchecked cards section
      <p className="grid-cards">
        {getVisibleCards().filter(card => !card.isChecked)
            .map(card => (

                <TodoCard
                key={card.id} 
                card={card}
                onCheck={() => toggleCheck(card.id)}
                onDelete={() => deleteCard(card.id)} 
                />

            ))}
      </p>
    </div>
  );
}

export default TodoApp;

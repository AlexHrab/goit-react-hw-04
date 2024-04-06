function SearchBar({onSubmit, setSearchValue}){

  function Submit(evt){
    evt.preventDefault();
    const form = evt.target;
		const value = form.elements.input.value;
		if(form.elements.input.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}
		onSubmit(value);
    setSearchValue(value)
    form.reset();
};
  

    return (
        <header>
  <form onSubmit={Submit}>
    <input
    name="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

    )
}

export default SearchBar;
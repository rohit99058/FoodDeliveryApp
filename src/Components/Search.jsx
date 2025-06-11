import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SuggestionCards from './SuggestionCards';
import FinalCard from './FinalCard';

const Search = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsData, setSuggestionsData] = useState([]);
    const [searchKaro, setSearchKaro] = useState('');

    // Debounce logic for fetching suggestions
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (query) {
                fetchSuggestions(query);
            } else {
                setSuggestions([]);
            }
        }, 500); // 500ms delay

        return () => clearTimeout(debounceTimer); // Cleanup timeout on every re-render
    }, [query]);

    const fetchSuggestions = async (searchQuery) => {
        try {
            const res = await fetch(
                `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.65200&lng=77.16630&str=${searchQuery}&trackingId=null&includeIMItem=true`
            );
            const data = await res.json();
            setSuggestions(data.data.suggestions);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    // Fetch search results when user selects a suggestion
    useEffect(() => {
        if (!searchKaro) return;
        
        const fetchSearchResults = async () => {
            try {
                setSuggestions([]); // Clear suggestions when searching
                const res = await fetch(
                    `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.65200&lng=77.16630&str=${searchKaro}&trackingId=null&submitAction=SUGGESTION&queryUniqueId=00a71d33-8763-fe57-2689-9271c8ad36a0&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2Fmomo.png%22%2C%22dishFamilyId%22%3A%22846565%22%2C%22dishFamilyIds%22%3A%5B%22846565%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
                );
                const data = await res.json();
                setSuggestionsData(data.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [searchKaro]);

    return (
        <div>
            <Navbar />

            <div className='w-8/12 mx-auto'>
                <div className='relative mx-auto'>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-[100%] border h-[56px] rounded-lg p-4'
                        type='text'
                        placeholder='Search for restaurant, item or more'
                    />
                    <i className='fa-solid fa-magnifying-glass text-black absolute top-5 right-5'></i>
                </div>

                {suggestions.length > 0 && (
                    <div className='border'>
                        {suggestions.map((item) => (
                            <SuggestionCards
                                key={item.id}
                                variable={searchKaro}
                                setter={setSearchKaro}
                                name={item.text}
                                type={item.type}
                                img={item.cloudinaryId}
                            />
                        ))}
                    </div>
                )}

                {suggestionsData.length > 0 && (
                    <div className='grid grid-cols-2'>
                        {suggestionsData.map((item) => (
                            <FinalCard
                                key={item?.card?.card?.info?.id}
                                isVeg={item?.card?.card?.info?.isVeg}
                                rating={item?.card?.card?.restaurant?.info?.avgRating}
                                resId={item?.card?.card?.restaurant?.info?.id}
                                resName={item?.card?.card?.restaurant?.info?.name}
                                img={item?.card?.card?.info?.imageId}
                                name={item?.card?.card?.info?.name}
                                price={item?.card?.card?.info?.price / 100}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;

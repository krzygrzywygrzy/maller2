import React from "react";
import useAlgoliaPhraseSearch from "../../utils/useAlgoliaPhraseSearch";
import SearchResultCard from "../searchResultCard/SearchResultCard";

const SearchBox = ({ query, close }) => {
  const { data } = useAlgoliaPhraseSearch(query);

  return data && data.length > 0 ? (
    <div>
      {data.map((result, index) => {
        if (index < 5) {
          return <SearchResultCard result={result} key={index} close={close} />;
        } else return <></>;
      })}
    </div>
  ) : (
    <div className="search-loading">...</div>
  );
};

export default SearchBox;

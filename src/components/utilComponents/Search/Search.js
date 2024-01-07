import React, { useEffect, useState } from "react";
import Card from "../../../Card/Card";
import Icon from "../../../Icons/Icon";
import CountryFlag from "../../../CountryFlag/CountryFlag";
import styles from "./Search.module.scss";

const Search = ({
  setSelectedCountry,
  setDropdown,
  placeholder,
  hasFlag,
  hasCountryCode,
  dropdown,
  onInput,
  height,
  countryList,
  handleSelection,
  type,
}) => {
  const [filteredCountryList, setFilteredCountryList] = useState(countryList);
  const [searchTerm, setSearchTerm] = useState("");
  const [emptyState, setEmptyState] = useState("empty");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setEmptyState(searchTerm === "" ? "empty" : "");

    if (type === "country") {
      const filteredList = countryList?.filter(
        ({ name, country_code }) =>
          name?.toLowerCase() === "Nigeria" ||
          country_code?.toLowerCase() === "+234"
      );
      setFilteredCountryList(filteredList);
    } else {
      const filteredList = countryList?.filter(
        ({ name, country_code }) =>
          name?.toLowerCase().includes(searchTerm) ||
          country_code?.toLowerCase().includes(searchTerm)
      );
      setFilteredCountryList(filteredList);
    }
  };

  useEffect(() => {
    if (type === "country") {
      const filteredList = countryList?.filter(
        ({ name, country_code }) =>
          name?.toLowerCase() === "Nigeria" ||
          country_code?.toLowerCase() === "+234"
      );

      setFilteredCountryList(filteredList);
    }

    return () => {};
  }, [countryList]);

  const handleMenuClick = (name, alpha2, postal_code, slug) => {
    setSelectedCountry(name);
    handleSelection(name, alpha2, postal_code, slug);
    setSearchTerm("");
    setDropdown(false);
  };

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => setDropdown(!dropdown)}
      ></div>
      <Card className={`${styles.Search} ${styles[emptyState]}`}>
        <div
          className={styles.inner}
          style={{ minHeight: height, height: height }}
        >
          <div className={styles.fixed}>
            <div>
              <Icon icon="search" color="shade-100" />
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                onInput={onInput}
                placeholder={placeholder || "Search for country"}
                autoFocus
              />
            </div>
          </div>
          {dropdown ? (
            <ul>
              {filteredCountryList?.map(
                ({ name, slug, country_code, alpha2, postal_code }, i) => (
                  <li
                    onClick={() =>
                      handleMenuClick(name, alpha2, postal_code, slug)
                    }
                    key={i}
                  >
                    <div className={styles.details}>
                      {hasFlag ? <CountryFlag country={slug} /> : ""}

                      <p>{name}</p>
                    </div>
                    {hasCountryCode ? (
                      <span
                        className={styles.country_code}
                      >{`(${country_code})`}</span>
                    ) : (
                      ""
                    )}
                  </li>
                )
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      </Card>
    </>
  );
};

Search.defaultProps = {
  hasFlag: true,
  hasCountryCode: true,
};

export default React.memo(Search);

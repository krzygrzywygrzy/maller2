import algoliasearch from "algoliasearch/lite";

const algolia = algoliasearch("ZA26LIZXE1", "f222d0e4acfbb875a4a9c7894b37ef02");
const algolia_products = algolia.initIndex("products");
export default algolia_products;

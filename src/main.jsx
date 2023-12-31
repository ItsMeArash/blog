import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//GraphQL
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// styles
import "./styles/index.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cljiexfu601h501ul5bc00sfv/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

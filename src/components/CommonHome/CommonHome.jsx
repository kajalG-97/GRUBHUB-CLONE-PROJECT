import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { Footer } from "../home-sec2/section2";
export const CommonHome = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    if (!value) {
      setSuggestions("");
      return;
    }
    fetch(
      `https://grubhub-backend-clone.herokuapp.com/restaurant_name/search?search=${value}`
    )
      .then((res) => res.json())
      .then((json) => setSuggestions(json));
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div>
      <div className="ch-top-blue-nav">
        <div>
          The Grubhub Guarantee: Get on-time delivery and the lowest prices. Or
          we’ll make it right. Terms apply.Learn More
        </div>
      </div>
      <div className="ch-img-cls">
        <div className="ch-img">
          <img
            src="https://user-images.githubusercontent.com/95849038/160893160-3ad8dd5a-bd35-4f19-9048-48e2ddc2c99b.png"
            alt=""
          />
        </div>
        <div className="ch-btn-cls">
          <div className="ch-btn-one">
            <Link to="/" className="ch-btn-link">
              Get Perks in the app
            </Link>
            <Link to="/Login" className="ch-btn-link">
              Sign in
            </Link>
          </div>
          <div className="ch-btn-two">
            <h1>Get food delivery and more</h1>
            <input
              type="text"
              className="search"
              placeholder="Enter something here..."
              onChange={(e) => optimizedFn(e.target.value)}
            />
            <button onClick={() => {}}>Search Nearby</button>
            {suggestions.length > 0 && (
              <div className="autocomplete">
                {suggestions.map((el, i) => (
                  <div key={i} className="autocompleteItems">
                    <Link to={"/"}>{el.restaurant_name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="ch-lst">
        <img
          src="https://user-images.githubusercontent.com/95849038/160833079-1513872f-1944-478a-a191-4fd9cdfe220f.png"
          alt=""
        />
      </div>
      <div className="ch-lst">
        <img
          src="https://user-images.githubusercontent.com/95849038/160833281-a208477e-cbb6-4905-9870-b303201c0812.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

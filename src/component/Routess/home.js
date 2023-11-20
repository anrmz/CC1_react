import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleTheme}>
        {isDarkMode ? " Light Mode" : " Dark Mode"}
      </button>
      <center>
        <h2> Welcom To My Web site</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore
        iste sequi ipsam cupiditate ratione architecto ducimus sed odit
        doloremque quis libero expedita modi incidunt, officiis minus, quidem
        illum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis adipisci aliquam laboriosam neque harum deleniti! Quidem,
        est soluta! Aspernatur atque quas tempora dolor impedit ea sit
        consequuntur harum aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore
        iste sequi ipsam cupiditate ratione architecto ducimus sed odit
        doloremque quis libero expedita modi incidunt, officiis minus, quidem
        illum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia dolore iste sequi ipsam cupiditate ratione architecto ducimus
        sed odit doloremque quis libero expedita modi incidunt, officiis minus,
        quidem illum corrupti. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia dolore iste sequi ipsam cupiditate ratione
        architecto ducimus sed odit doloremque quis libero expedita modi
        incidunt, officiis minus, quidem illum corrupti. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia dolore iste sequi ipsam
        cupiditate ratione architecto ducimus sed odit doloremque quis libero
        expedita modi incidunt, officiis minus, quidem illum corrupti. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore iste
        sequi ipsam cupiditate ratione architecto ducimus sed odit doloremque
        quis libero expedita modi incidunt, officiis minus, quidem illum
        corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis adipisci aliquam laboriosam neque harum deleniti! Quidem,
        est soluta! Aspernatur atque quas tempora dolor impedit ea sit
        consequuntur harum aut?
      </center>
    </div>
  );
}

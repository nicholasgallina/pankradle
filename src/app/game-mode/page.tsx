export default function GameMode() {
  return (
    <div id="wd-lab1">
      <h1 className="text-5xl">Pankradle</h1>
      Menu
      <ul>
        <li>Pause</li>
        <li>Surrender</li>
        <li>Stats</li>
        <li>Shop</li>
      </ul>
      <h3>Rules</h3>
      <p id="wd-p-2">
        The game will only begin after a player christens Dana's head with oil.
      </p>
      <p>
        The player will then be prompted to input a UFC PPV, which will then be
        matched to the daily UFC PPV selected. The first undercard bout is the
        only clue.
      </p>
      <p>
        The player will try to guess today's UFC PPV, with each subsequent guess
        revealing the next bout on the card.
      </p>
      <p>
        The game ends when: A player inputs the correct bout OR A player runs
        out of guesses.
      </p>
      <p>
        The score will be calculated based on how many guesses and how much time
        a player takes to answer.
      </p>
      <div id="wd-tables">
        <h2>
          SAMPLE FIGHTER DATA WILL POPULATE THIS TABLE VIA API/WEB-SCRAPER
        </h2>
        <table border={30} width="50%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Origin</th>
              <th>Division</th>
              <th>Victories</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="right">Darnell Scoupitini</td>
              <td>28</td>
              <td>Seychelles</td>
              <td>Middleweight</td>
              <td>17</td>
              <td> </td>
            </tr>
            <tr>
              <td>Paddy Pimblett</td>
              <td>30</td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <img
                  id="paddy-pimblett-espn"
                  width="400px"
                  src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4008549.png&w=350&h=254"
                />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div id="guess">
        <input placeholder="Guess the PPV!"></input>
      </div>
    </div>
  );
}

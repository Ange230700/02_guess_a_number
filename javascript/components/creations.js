// javascript\components\creations.js

function createFirstPlayerSectionComponent() {
  return `
        <section class="first-player-section">
            <h2 class="hints-and-instructions">
              Let the first player input the number to  guess. It should be a number between 0 and 50.
            </h2>
            <input type="password" id="first-player-input" />
            <button id="first-player-button">Submit</button>
        </section>
    `;
}

function createSecondPlayerSectionComponent() {
  return `
    <section class="second-player-section" style="display: none">
        <h2 class="hints-and-instructions">
          Let the second player input their guess.
        </h2>
        <input type="number" id="second-player-input" min="0" max="50" />
        <button id="second-player-button">Submit</button>
          <button id="play-again-button" style="display: none">Play again</button>
    </section>
    `;
}

export {
  createFirstPlayerSectionComponent,
  createSecondPlayerSectionComponent,
};

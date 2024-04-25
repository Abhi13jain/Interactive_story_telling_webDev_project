        // // Define the function for updating the story text in the div
        // function updateStory(text) {
        //     const storyDiv = document.getElementById("storyline");
        //     storyDiv.innerHTML = "<p>" + text + "</p>";
        // }
        // // Start the story
        // startStory();
        // // Define the main function for the story
        // function startStory() {
        //     updateStory("Welcome to 'The Crossroads of Destiny'. You are Alex, a weary traveler standing at the ancient Crossroads in the forest.");

        //     // Start the journey
        //     choosePath();
        // }
        // // Function to prompt the user to choose a path
        // function choosePath() {
        //     updateStory("You face two paths: one shrouded in darkness and the other bathed in moonlight. Which path will you choose?");
        
        //     // Add input for the user's choice
        //     const choiceInput = document.createElement("input");
        //     choiceInput.setAttribute("type", "text");
        //     choiceInput.setAttribute("id", "pathChoice");
        //     choiceInput.placeholder = "Type '1' for darkness or '2' for moonlight";
        //     storyline.appendChild(choiceInput);

        //     // Add button to submit choice
        //     const submitButton = document.createElement("button");
        //     submitButton.textContent = "Submit";
        //     submitButton.onclick = handleChoice;
        //     storyline.appendChild(submitButton);
        // }

        // // Function to handle the user's choice of paths
        // function handleChoice() {
        //     let choice = document.getElementById("pathChoice").value.trim();
        //     if (choice === '1') {
        //         pathDarkness();
        //     } else if (choice === '2') {
        //         pathMoonlight();
        //     } else {
        //         updateStory("Invalid choice! Please type '1' or '2'.");
        //         choosePath();
        //     }
        // }

        // // Function for the path of darkness
        // function pathDarkness() {
        //     updateStory("You chose the path shrouded in darkness.");

        //     // Implement the consequences of choosing the path of darkness
        //     updateStory("As you venture deeper into the darkness, you hear eerie whispers and feel a chill down your spine. Suddenly, you stumble upon a hidden cave with a glimmering treasure. As you reach for it, the ground gives way beneath you!");

        //     // End the story
        //     endStory();
        // }

        // // Function for the path of moonlight
        // function pathMoonlight() {
        //     updateStory("You chose the path bathed in moonlight.");

        //     // Implement the consequences of choosing the path of moonlight
        //     updateStory("You follow the path illuminated by the gentle moonlight. The forest feels serene and peaceful. As you continue, you encounter a babbling brook where a weary traveler rests. They offer you a map to your destination.");

        //     // Continue the journey
        //     continueJourney();
        // }

        // // Function to continue the journey after choosing the path of moonlight
        // function continueJourney() {
        //     updateStory("You thank the traveler and continue your journey. Ahead, you encounter another fork in the road.");

        //     // Handle the next choice
        //     handleNextChoice();
        // }

        // // Function to handle the next choice in the journey
        // function handleNextChoice() {
        //     updateStory("You encounter another fork in the road. Will you go left or right?");

        //     // Add input for the user's choice
        //     const choiceInput = document.createElement("input");
        //     choiceInput.setAttribute("type", "text");
        //     choiceInput.setAttribute("id", "nextChoice");
        //     choiceInput.placeholder = "Type '1' for left or '2' for right";
        //     storyline.appendChild(choiceInput);

        //     // Add button to submit choice
        //     const submitButton = document.createElement("button");
        //     submitButton.textContent = "Submit";
        //     submitButton.onclick = handleNextChoiceSubmit;
        //     storyline.appendChild(submitButton);
        // }

        // // Function to handle the next choice in the journey
        // function handleNextChoiceSubmit() {
        //     let choice = document.getElementById("nextChoice").value.trim();

        //     if (choice === '1') {
        //         pathLeft();
        //     } else if (choice === '2') {
        //         pathRight();
        //     } else {
        //         updateStory("Invalid choice! Please type '1' or '2'.");
        //         handleNextChoice();
        //     }
        // }

        // // Function for the left path
        // function pathLeft() {
        //     updateStory("You chose the left path.");

        //     // Implement the consequences of choosing the left path
        //     updateStory("As you follow the left path, you come across a dense thicket of thorns blocking your way. You can try to cut through it or find an alternate route.");

        //     // Handle the user's choice
        //     // Add input for the user's choice
        //     const choiceInput = document.createElement("input");
        //     choiceInput.setAttribute("type", "text");
        //     choiceInput.setAttribute("id", "leftPathChoice");
        //     choiceInput.placeholder = "Type '1' to cut through or '2' to find an alternate route";
        //     storyline.appendChild(choiceInput);

        //     // Add button to submit choice
        //     const submitButton = document.createElement("button");
        //     submitButton.textContent = "Submit";
        //     submitButton.onclick = handleLeftPathChoice;
        //     storyline.appendChild(submitButton);
        // }

        // // Function to handle the user's choice for the left path
        // function handleLeftPathChoice() {
        //     let choice = document.getElementById("leftPathChoice").value.trim();

        //     if (choice === '1') {
        //         updateStory("You decide to cut through the thicket, but it proves to be too dense and impassable. Exhausted and frustrated, you backtrack to find another way.");
        //         continueJourney();
        //     } else if (choice === '2') {
        //         updateStory("You choose to find an alternate route. After some searching, you discover a hidden path that leads you safely past the thicket.");
        //         continueJourney2();
        //     } else {
        //         updateStory("Invalid choice! Please type '1' or '2'.");
        //         pathLeft();
        //     }
        // }

        // // Function for the right path
        // function pathRight() {
        //     updateStory("You chose the right path.");

        //     // Implement the consequences of choosing the right path
        //     updateStory("You follow the right path, which leads you through a tranquil grove of ancient trees. However, you soon encounter a pack of wild wolves blocking your path. You must decide whether to confront them or find a way to sneak past.");

        //     // Handle the user's choice
        //     // Add input for the user's choice
        //     const choiceInput = document.createElement("input");
        //     choiceInput.setAttribute("type", "text");
        //     choiceInput.setAttribute("id", "rightPathChoice");
        //     choiceInput.placeholder = "Type '1' to confront or '2' to sneak past";
        //     storyline.appendChild(choiceInput);

        //     // Add button to submit choice
        //     const submitButton = document.createElement("button");
        //     submitButton.textContent = "Submit";
        //     submitButton.onclick = handleRightPathChoice;
        //     storyline.appendChild(submitButton);
        // }

        // // Function to handle the user's choice for the right path
        // function handleRightPathChoice() {
        //     let choice = document.getElementById("rightPathChoice").value.trim();

        //     if (choice === '1') {
        //         updateStory("You choose to confront the wolves, but they prove to be too fierce and overwhelming. Injured, you retreat and search for an alternate route.");
        //         continueJourney();
        //     } else if (choice === '2') {
        //         updateStory("You decide to try to sneak past the wolves. With careful planning and stealth, you manage to evade them and continue on your journey.");
        //         continueJourney2();
        //     } else {
        //         updateStory("Invalid choice! Please type '1' or '2'.");
        //         pathRight();
        //     }
        // }

        // // Function to continue the journey after the first set of choices
        // function continueJourney2() {
        //     updateStory("You press on, overcoming obstacles and facing new challenges.");

        //     // For simplicity, we'll end the story here
        //     endStory();
        // }

        // // Function to end the story
        // function endStory() {
        //     updateStory("Congratulations! You have reached the end of 'The Crossroads of Destiny'. Your destiny awaits beyond the gate.");

        //     // Add option to restart the story
        //     const restartButton = document.createElement("button");
        //     restartButton.textContent = "Restart Story";
        //     restartButton.onclick = restartStory;
        //     storyline.appendChild(restartButton);
        // }

        // // Function to restart the story
        // function restartStory() {
        //     // Clear the story div
        //     document.getElementById("storyline").innerHTML = "";

        //     // Restart the story
        //     startStory();
        // }
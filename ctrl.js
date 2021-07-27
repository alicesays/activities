/*
* AngularJS controller (JavaScript that controls the modules)
* Activities information is hard-coded as an array
* author: jwhittaker
* date: 06/27/2021
*/

app.controller("myCtrl", function ($scope) {
    $scope.searchName = "";
    $scope.activities = [
        {
            "Count": "1",
            "Title": "Nature Colour Hunt",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "clipboard, paint chips, egg containers, laminated sheets",
            "Details": "Create a list of colours to look for using paint chips, paint or other colourful materials. Search for the specific colours in nature as a treasure hunt. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "2",
            "Title": "Nature Playdough",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "playdough, items for colour",
            "Details": "Make homemade playdough, add items found in nature for colour. Store playdough in a plastic bag or container. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit",
            "Notes": "playdough recipe needed"
        },
        {
            "Count": "3",
            "Title": "Nature Texture Hunt",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "clipboard, items with different textures, pencil",
            "Details": "Create a list of textures with the kids (or prepare beforehand). Search for specific textures in nature",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "4",
            "Title": "Story Stones",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "ANY",
            "Materials": "stones, undecorated or pre-decorated",
            "Details": "Paint or decorate large stones with story ideas (ifor example nouns, verbs, genre/ emotions chosen by kids). Create stories based on the story stones selected. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "5",
            "Title": "Bug Count",
            "Category": "Exploration",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "ANY",
            "Materials": "clipboard, pencil, magnifying glass (optional), shovel (optional)",
            "Details": "Pick a location, and carefully observe the types of bugs you see. Use a clipboard and pencil to create a list of bugs including how many you see of each bug. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "6",
            "Title": "Stick Spider Web",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "string, popsicle sticks, branches, grass",
            "Details": "Wrap string around collected sticks or use a large rope to wrap around tree branches. Try to recreate a spider web. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "7",
            "Title": "Flower Pounding",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "paper, flowers that are ok to pick, heavy tool",
            "Details": "Bring flowers that are ok to use for crafts or collect wild flowers that you can pick. Place flowers on a sheet of paper. Pound the flower with a hammer until smooth. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "8",
            "Title": "Water Bug Hunting",
            "Category": "Exploration",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "magnifying glass, spoon, ice cube tray, fish nets",
            "Details": "Take a magnifying glass, bug net and a bucket or container. Try to oberve different types of bugs int he water. ",
            "Link": "https://docs.google.com/document/d/1-nDAkBLpd3sX6k0shdOka-66R7Y55Gtx/edit"
        },
        {
            "Count": "9",
            "Title": "Journey Stick",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Time": "ANY",
            "Materials": "stick"
        },
        {
            "Count": "10",
            "Title": "Story Time",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY"
        },
        {
            "Count": "11",
            "Title": "Mud Kitchen",
            "Category": "Imagination",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "YES",
            "Age": "3-10",
            "Time": "30 min+",
            "Materials": "mud buckets, shovels, muffin cups, pots, pans, some water",
            "Details": "Use buckets, kitchen utensils or items found in nature to create items with dirt and mud. Kids can create a sign to promote their kitchen or mud store. "
        },
        {
            "Count": "12",
            "Title": "Leaf Rubbing",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "leaves, crayons, markers, paper",
            "Details": "Find leaves and place them behind a sheet of paper. Rub the paper with a crayon or marker."
        },
        {
            "Count": "13",
            "Title": "Blindfold/ Mystery Box",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "bag or box, mystery item options: pinecones, branches, bark, grass, leaves, owl pellets, feathers, rocks, moss, dirt, clay, sand etc. ",
            "Details": "Place a mystery item in a bag or box, have the kids feel and guess what the mystery item might be."
        },
        {
            "Count": "14",
            "Title": "Twig/ Stone Tower",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "sticks, branches, rocks",
            "Details": "Create a tower with items found in nature."
        },
        {
            "Count": "15",
            "Title": "Fort Making",
            "Category": "Building",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "30 min+",
            "Materials": "string, tarp, branches",
            "Details": "Look for a spot that would make a good fort. Create a fort using string, tarp or branches. Fort can be any shape, size etc. "
        },
        {
            "Count": "16",
            "Title": "Tree Climbing",
            "Category": "Free play",
            "Season": "ALL",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "ANY",
            "Materials": "nice climbing tree",
            "Details": "Kids can explore to find the perfect tree for climbing. See page --- for our tree climbing basics!"
        },
        {
            "Count": "17",
            "Title": "Bird Calls",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "bird food (optional)",
            "Details": "Create different kinds of bird noises. Try to copy the sounds you hear in nature."
        },
        {
            "Count": "18",
            "Title": "Mud Face Painting",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "YES",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "mud, water, cleaning clothes",
            "Details": "Find a good mud pile or mix water ith dirt. Use the mud to decorate your face. "
        },
        {
            "Count": "19",
            "Title": "Memory Game",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "clipboard, 5-10 small items (i.e. rocks, sticks, leaves, markers etc)",
            "Details": "Start with a full set of items (5-10), give children a few minutes to memorize all the items on the clipboard or ground. Take one item away at a time. See if kids can remember which item was taken."
        },
        {
            "Count": "20",
            "Title": "Solar Oven",
            "Category": "Exploration",
            "Season": "Summer",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Time": "30 min+",
            "Materials": "2 cardboard boxes, tinfoil, saran wrap"
        },
        {
            "Count": "21",
            "Title": "Owl Pellets",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "5-10 min",
            "Materials": "owl pellets",
            "Details": "Owl pellets or any nature items can be used for show and tell, mystery box or the memory game. "
        },
        {
            "Count": "22",
            "Title": "Screen Printing",
            "Category": "Crafts",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Time": "30 min+",
            "Materials": "embroidery hoop, modge podge, paint, brushes, paint"
        },
        {
            "Count": "23",
            "Title": "Geocaching",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "ANY",
            "Details": "Hide items ahead of time for children to find or use an app to find geocache items."
        },
        {
            "Count": "24",
            "Title": "Scavenger Hunt",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "clipboard, bag, string to store items found, map",
            "Details": "Create a list of items ahead of time or with the children to go and find. "
        },
        {
            "Count": "25",
            "Title": "Wood Burning With Magnifying Glass",
            "Category": "Crafts",
            "Season": "Spring, Summer",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "wood blocks, magnifying glass, nice sunny day",
            "Details": "Use a magnifying glass to focus energy from the sun. Move your magnifying glass above your piece of wood until you see a small circle of concentrated light. Slowly move the magnifying glass to create words and shapes. "
        },
        {
            "Count": "26",
            "Title": "Gnome Homes",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "any items found in nature",
            "Details": "Use items found in nature to create homes for fairies and gnomes."
        },
        {
            "Count": "27",
            "Title": "Kindness Rocks",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "rocks, paint, markers",
            "Details": "Use paint or markers to create messages and art on rocks. Place the rocks out in nature for others to find. "
        },
        {
            "Count": "28",
            "Title": "Tree Clay Faces",
            "Category": "Crafts",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Materials": "clay",
            "Details": "Place a small circle of wet clay on a tree trunk. Use your hand or a stick to create a face in the clay to give your tree a face. "
        },
        {
            "Count": "29",
            "Title": "Reusable Water Balloons",
            "Category": "Free play",
            "Season": "Summer",
            "Weather Dependent?": "YES",
            "Messy?": "YES",
            "Age": "ANY",
            "Time": "30 min+",
            "Materials": "sponges, water",
            "Details": "Place sponges or crochet water balloons in a bucket of water. When they are wet use them like water balloons. "
        },
        {
            "Count": "30",
            "Title": "ABC Nature Walk",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "magnifying glass",
            "Details": "Choose letters of the alphabet and search and find things in nature that begin with that letter."
        },
        {
            "Count": "31",
            "Title": "Adjective Walk",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Details": "An adjective is a word that can describe a noun. (E.g. big, small, round, sharp). Walk around outside and find things in nature but rather then identifying a nature object, describe it with an adjective.\nExample: When seeing a moss covered rock, challenge everyone to say one adjective about the rock, how it feels, looks and smells. Fuzzy, green, soft, wet. "
        },
        {
            "Count": "32",
            "Title": "Bark Walk",
            "Category": "Scavenger hunt",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "optional: magnifying glass, blindfold",
            "Details": "Focus on finding different types of trees/bark. Describe how it feels, looks etc. Bring a blindfold to play meet a tree - blindfold player feels the texture of trees bark, sees how big the tree is by putting arms around it, explore leaves, twigs etc. Take them away from the tree and take blindfold off to see if they can guess which tree it was that they had touched."
        },
        {
            "Count": "33",
            "Title": "Snow Volcano",
            "Category": "Crafts",
            "Season": "Winter",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "container with a small opening, food colouring, dish soap, baking soda, vinegar",
            "Details": "Wrap snow around a container in a volcano shape. Add dish soap, food colouring, and baking soda to the container. When ready, add vinegar to create an erupting volcano. "
        },
        {
            "Count": "34",
            "Title": "Clay Jewellery/ Art",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Materials": "polymer clay, optional: sticks, small putty knives, cookie cutters, string",
            "Details": "Use clay to make small beads or other kinds of jewellery.",
            "Link": "https://artfulparent.com/clay-leaf-prints/"
        },
        {
            "Count": "35",
            "Title": "Paint Leaf Printing",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "3-10",
            "Time": "10-30 min",
            "Materials": "leaves, paint, paper",
            "Details": "Find some nice leaves and decorate with paint. Place the leaf paint side down on a piece of paper.",
            "Link": "https://kleas.typepad.com/kleas/2010/10/leaf-printing.html#*"
        },
        {
            "Count": "36",
            "Title": "Nature Art",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "Maybe",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "any items found in nature",
            "Details": "Use items found in nature to create a piece of art. Ideas include nature mandelas, towers, nature homes, faces/ masks. "
        },
        {
            "Count": "37",
            "Title": "Squirrel and Foxes",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "3-10",
            "Time": "10-30 min",
            "Materials": "a large field, pinecones or bandanas",
            "Details": "People get into two groups: the squirrels and the foxes. Size the groups based on the ratio of one fox for every 4 or 5 squirrels. The numbers can vary, adjust them to fit your needs. The squirrels have a pile of \"nuts\" (pinecones or bandanas) that they are trying to place in a cache for the winter that is being guarded by the foxes. The squirrels try to outwit the foxes by hiding the nuts on their bodies as they run. Squirrels can only put one nut in the cache at a time, and only one nut is allowed to be active on the playing field at a time. If a squirrel gets tagged by a fox they are then frozen in place. When they're frozen they drop the nut. There is also a magic \"unfreezing\" object (bandana) that is passed from one squirrel to another to unfreeze frozen squirrels by touching them with it. If the squirrel with the unfreezing object gets tagged while they have the unfreezing object in their hand, they drop it and freeze. The squirrels win if they get all their nuts in the cache. The foxes win if they tag and freeze all the squirrels."
        },
        {
            "Count": "38",
            "Title": "Kick the Can Ice Cream",
            "Category": "Cooking",
            "Season": "Winter",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "small can, outer can that fit small can inside, 2 cups soy milk or coconut milk, 1/2 cup sugar, 2 tsp vanilla",
            "Details": "Mix ingredients in inner can (milk, sugar, vanilla). Place inner can inside larger can. Place snow inside larger can around smaller can. Kick the can, eat the result! "
        },
        {
            "Count": "39",
            "Title": "Garden Yoga",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY ",
            "Details": "Try different nature poses: tree, frog, seed, butterfly, flower."
        },
        {
            "Count": "40",
            "Title": "Eagle Eye",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Details": "One person is the eagle and stands in one place (the nest). The \"eagle\" counts to 20 and everyone else (prey) must hide somewhere. They must hide in a place where they can still see the eagle. The eagle cannot move from their location. When they see someone, they just say them name and that person joins the eagle in their nest. If the eagle can't find anyone else, they loudly announce that they are going to count again, and they count to 15 and everyone still hiding needs to run and touch the nest and then hide again. The game continues until everyone is found."
        },
        {
            "Count": "41",
            "Title": "Running and Screaming Game",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Details": "Create a starting line and have everyone line up. Take a deep breath, start screaming and running at the same time. When you run out of breath stop running. See how far you can run in one breath."
        },
        {
            "Count": "42",
            "Title": "Fire Keeper",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "sticks",
            "Details": "One person is in the centre (the fire keeper), and everyone else goes and finds a long stick and places it around the fire keeper. The fire keeper is then blindfolded and everyone else makes a large circle around the fire keeper. When a leader says ‘go’, everyone in the circle tries to stealthily creep forward to grab a stick. When the fire keeper hears a noise that they think is someone getting close to one of their sticks, they point in the direction of the sound. If they are pointing at you and you have been moving forward, then you have to put the stick back (if you had it in your hand), and return to your original spot. Teach the ‘fox walk’ before playing this game (where you walk quietly on the outsides of your feet, toes first)"
        },
        {
            "Count": "43",
            "Title": "Name Game",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "3-10",
            "Time": "10-30 min",
            "Details": "Separate into two groups and have two people hold a large, blanket separating the two groups so that neither group can see the other. When the blanket drops, the first person to correctly call out the name of the other group’s designated person wins the round and the loser goes to the winning team."
        },
        {
            "Count": "44",
            "Title": "Tying Knots",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "ANY",
            "Materials": "tarp, assorted string/ rope",
            "Details": "Free play: put out a bag of string/ rope and tarp and let the kids create what they like. See page ---- for specific knots we find useful! ",
            "Notes": "Get photo for lashing/ square knot/ bowline if space"
        },
        {
            "Count": "45",
            "Title": "Whittling Tools",
            "Category": "Exploration",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "knife, wood",
            "Details": "Ensure the kids know appropriate knife skills before letting them use the knife themselves (do a demo with the kids and watch them). Knife should be pointed away from body. See page --- for basic tool and knife safety! "
        },
        {
            "Count": "46",
            "Title": "Nature Boat Race (puddle Boat Race)",
            "Category": "Game",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "paper, items found in nature",
            "Details": "Create a boat made of paper, sticks, bark (other items found in nature) that you think will float in puddle or pond. Have a boat race."
        },
        {
            "Count": "47",
            "Title": "Ninja Stars Origami",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "paper",
            "Link": "https://www.origamiway.com/origami-ninja-star.shtml"
        },
        {
            "Count": "48",
            "Title": "Slackline",
            "Category": "Exploration",
            "Season": "ALL",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "slackline"
        },
        {
            "Count": "49",
            "Title": "Nature (rock) Chalk",
            "Category": "Imagination",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "rocks, clay rocks",
            "Details": "Use rocks, clay rocks or dirt that you find to make chalk art."
        },
        {
            "Count": "50",
            "Title": "Nature Obstacle Course",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "Maybe",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "items found in nature, backpacks, big rocks (etc)",
            "Details": "Use items found in nature, rocks etc. To create an obstacle course for the kids to try out."
        },
        {
            "Count": "51",
            "Title": "Flag/ Logo Making ",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "paper, drawing materials (pens, markers), glue, tape, scissors",
            "Details": "Create a wild child logo or any kind of logo for your own personal flag."
        },
        {
            "Count": "52",
            "Title": "Puppet Making",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "old socks, markers, string, sewing materials, ribbon, anything you would like to decorate your puppet"
        },
        {
            "Count": "53",
            "Title": "Shadow Puppet Theatre",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "ANY ",
            "Time": "10-30 min",
            "Materials": "large white sheet (or sidewalk space), optional: toy animals",
            "Details": "When the sun is out, use a white sheet to create shadows and create a shadow puppet sdtory. Can also be done on the sidewalk. "
        },
        {
            "Count": "54",
            "Title": "Shadow Drawings",
            "Category": "Imagination",
            "Season": "ALL",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "paper, something that will create a shadow you want to draw",
            "Details": "Put your item in a place that will create a shadow on top of a piece of paper. Draw the shape of the shadow. Finish by adding details or colouring your picture. "
        },
        {
            "Count": "55",
            "Title": "Underwear/ Undersoil Challenge ",
            "Category": "Exploration",
            "Season": "Summer",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "10-15",
            "Time": "60 days/ 2 months",
            "Materials": "clean 100% cotton underwear, shovel, camera",
            "Details": "Take a clean pair of underwear and place in hole in the ground. Mark the location. In 60 days, dig your underwear up and examine decomposition (heavy decomposition = high bacterial activity). You can discuss how bacteria in the soil break down all living things and transform nutrients for growing plants. ",
            "Link": "https://soilcc.ca/programs/soil-your-undies/"
        },
        {
            "Count": "56",
            "Title": "Swedish Snowball Lanterns",
            "Category": "Crafts",
            "Season": "Winter",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "snow to make snowballs, tealights",
            "Details": "Make lots of snowballs. Create a base layer of snowballs by making a circle. Add snowballs layer by layer until a small mountain is formed. Try to leave small space to add tealights later. ",
            "Link": "https://artfulparent.com/swedish-snowball-lanterns/"
        },
        {
            "Count": "57",
            "Title": "Snow Face Plants",
            "Category": "Imagination",
            "Season": "Winter",
            "Weather Dependent?": "YES",
            "Messy?": "NO",
            "Age": "3-10",
            "Time": "ANY",
            "Materials": "your face :)",
            "Details": "Plant your face in the show. What kind of faces can you make in the snow?"
        },
        {
            "Count": "58",
            "Title": "Newspaper Pots (for Plants)",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "5-10 min",
            "Materials": "paper (newspaper or flyers work best)",
            "Link": "https://www.instructables.com/DIY-Newspaper-Pots/"
        },
        {
            "Count": "59",
            "Title": "Drawing on the Back Game",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "ANY",
            "Materials": "paper, drawing tools",
            "Details": "This game is played with 2 people. One person is the back drawer who draws on their friends back. The second person also has a pen and paper and tries to draw what they feel is being drawn on their back. "
        },
        {
            "Count": "60",
            "Title": "Spray Bottle Water Play",
            "Category": "Game",
            "Season": "Summer",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "spray bottles filled up with water",
            "Details": "Use squirt bottles filled with water to cool off on a hot day. Try making art by directing spray bottle on a wall or pavement surface."
        },
        {
            "Count": "61",
            "Title": "Slingshot",
            "Category": "Crafts",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "10-30 min",
            "Materials": "Y shaped stick, rubber band, small rocks, target, small rectangle piece of cardboard to strengthen slingshot (optional)",
            "Details": "Find a Y shaped piece of wood. Create 1 notch in each arm of the Y shape about 1/2\" from the top of each Y. Tie a rubber band to each side of the arms around the notches you just created. You can add a piece of cardboard threaded through the rubberband that will be used to hold rocks if you like. ",
            "Link": "https://www.wikihow.com/Make-a-Sling-Shot"
        },
        {
            "Count": "62",
            "Title": "Snow Paint",
            "Category": "Crafts",
            "Season": "Winter",
            "Weather Dependent?": "YES",
            "Messy?": "Maybe",
            "Age": "ANY",
            "Time": "10-30 min",
            "Materials": "small squirt bottle, food colouring, water",
            "Details": "Mix a small amount of food colouring with water and put different colours in each squirt bottle. Create art in the snow by squirting bottles. "
        },
        {
            "Count": "63",
            "Title": "Jumping Frog Origami",
            "Category": "Crafts",
            "Season": "Spring, Summer, Fall",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "5-10",
            "Time": "5-10 min",
            "Materials": "paper"
        },
        {
            "Count": "64",
            "Title": "Squeeze Game",
            "Category": "Game",
            "Season": "ALL",
            "Weather Dependent?": "NO",
            "Messy?": "NO",
            "Age": "ANY",
            "Time": "5-10 min",
            "Materials": "anything to make a circle",
            "Details": "Make a circle on the ground, you can do this with rope or hammocks or flagging tape and invite everyone who wants to play into the circle. Once everyone stands inside shout, this circle is to big! Then tighten the circle repeat until there is no way to make the circle smaller without the kids falling out. You can encourage the kids to think of creative ways to make everyone fit, piggy backs, or interlocking arms or standing in a pattern (large people in the middle and smaller on the sides) is a great way of making the circle very very small.\n\nThis game like most is super fun and very quick, as you can use hammocks to play its great after quiet time"
        }
    ];
    //Instructions for sorting
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});

//Not sure how to call json file
// $http({
//     method: 'GET',
//     url: 'cats.json'
// }).then(function (response){
//
// },function (error){
// });


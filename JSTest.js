/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];  // This array will store our NFT objects

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, owner) {
    const nft = {         // Creating an object to represent an NFT
        name: name,         // Assigning the name parameter to the name property
        description: description, // Assigning the description parameter to the description property
        owner: owner        // Assigning the owner parameter to the owner property
    };
    nftCollection.push(nft);  // Adding the newly created NFT object to the nftCollection array
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name : ", nftCollection[i].name);
        console.log( "Description : ", nftCollection[i].description);
        console.log("Owner : " + nftCollection[i].owner);
        console.log();
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;  // Returning the length of the nftCollection array
}

// call your functions below this line

mintNFT("NFT 1", "An NFT", "A");
mintNFT("NFT 2 ", "Another NFT", "B");
mintNFT("NFT 3", "Another NFT", "C");

listNFTs();

console.log(`Total supply of NFTs: ${getTotalSupply()}`);

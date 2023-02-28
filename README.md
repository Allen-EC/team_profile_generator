# Team Profile Generator
A CLI interface to generate a html file that contains information regarding a team that has been entered on the command line.


## Description

The purpose of this CLI (Command Line Interface) is to ease the creation of a details webpage containing information cards for a team.
THe team will consist of the following:
* Only 1 Manager, with the following information:  
    * Name.
    * Employee ID.
    * Email Address.
    * Office Number.
* 0 or more Engineers, with the following information:
    * Name.
    * Employee ID.
    * Email Address.
    * GitHub Username.
* 0 or more Interns, with the following information:
    * Name.
    * Employee ID.
    * Email Address.
    * School.

![demo](./assets/images/screenshot.png)

## Usage

The source files will be saved into a directory of your choice.
A GitBash terminal will then be opened in this directory.

THe appropiate "NPM" packages will need to be installed, this is achieved with the following command:
```text
npm install
```
This will install all the required packages as defined in the package.json file.

The program will be run from the command line by executing the following command: 
```text 
 node index.js
```

The user is first asked to enter the details for the manager in the order shown above.
Once the manager's information is entered, the user is than asked if they wish to add another employee to the team.

If they chose to enter another employee, they are then asked if they wish to enter an Engineer, or an Intern.

They are then asked for the information in the order shown above.

They are once again asked if they wish to add another team member.

This process continues until the user choses not to add another team member, at which point, the program generates the HTML file containing the information displayed as employee cards, and saves it to a file in the output directory.

The program then exits.

## Credits

* [Allen Cummins](https://github.com/Allen-EC)  

---
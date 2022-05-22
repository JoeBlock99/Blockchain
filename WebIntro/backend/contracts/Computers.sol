// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Computers {
    struct computer{
        bool used;
        address by;
    }

    mapping(uint => computer) computers;

    function registerComputers(uint coms) public {
        for (uint i = 1; i <= coms; i++){
            computer storage newComputer = computers[i];
            newComputer.used = false;
            newComputer.by = address(0);
        }
    }

    function useComputer(uint id) public {
        if (!computers[id].used) {
            computers[id].used = true;
            computers[id].by = msg.sender;
        }
    }

    function leaveComputer(uint id) public {
        if (computers[id].used && computers[id].by == msg.sender) {
            computers[id].used = false;
            computers[id].by = address(0);
        }
    }

    function getComputer(uint id) public view returns (
        bool,
        address
    ){
        computer storage com = computers[id];
        return(com.used,com.by);
    }
}
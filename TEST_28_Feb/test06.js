/*
Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
*/

let severity = "rarely";
let impact = "major";
let priority = "";

if (severity == "always") {
    if (impact == "blocker") {
        priority = "P0";
    } else if (impact == "major") {
        priority = "P1";
    } else if (impact == "minor") {
        priority = "P2";
    }
} else if (severity == "often") {
    if (impact == "blocker") {
        priority = "P1";
    } else if (impact == "major") {
        priority = "P2";
    } else if (impact == "minor") {
        priority = "P3";
    }
} else if (severity == "rarely") {
    if (impact == "blocker") {
        priority = "P2";
    } else if (impact == "major") {
        priority = "P3";
    } else if (impact == "minor") {
        priority = "P4";
    }
}
console.log(`Priority: ${priority}`);
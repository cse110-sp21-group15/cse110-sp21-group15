/**
 * Tests to verify that the linter recognizes unreachable code
 */
function unreachableStatement(a, b) {
    let result = a + b;
    return result;
    console.log("This is unreachable");
}

/**
 * Tests to verify that the linter recognizes assignment operators in 
 * conditional statements
 */
function assigningInConditional(a) {
    if (a = "assigning in a conditional") {
        return a;
    } 
}

/**
 * Tests to verify that the linter recognizes unused variables
 */
function unusedVars() {
    let str = "This is unused.";
}


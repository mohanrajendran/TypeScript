/// <reference path='fourslash.ts' />

////interface I { i(): void; }
////interface J { j(): void; }
////class C implements I, J {}
////class D implements J {}

verify.codeFixAll({
    fixId: "fixClassIncorrectlyImplementsInterface",
    // TODO: GH#20073 GH#18445
    newFileContent:
`interface I { i(): void; }
interface J { j(): void; }
class C implements I, J {\r
    i(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
    j(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
}
class D implements J {\r
    j(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
}`,
});

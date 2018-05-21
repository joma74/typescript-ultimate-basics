enum Sizes {
    Small,
    Medium,
    Large,
}
// extend
enum Sizes {
    ExtraLarge = 3
}
// gives 1
console.log(Sizes.Medium)
// reverse lookup
console.log(Sizes[Sizes.Large])

// !no reverse lookup
enum SizesAsStrings {
    None = "none",
    Small = "small",
    Medium = "medium",
    Large = "large",
}

// reverse lookup gives undefined
console.log(SizesAsStrings[SizesAsStrings.Large])

let selected: SizesAsStrings = SizesAsStrings.None;

function updateSize(size: SizesAsStrings): void {
    selected = size;
}

updateSize(SizesAsStrings.Small);

console.log(selected);

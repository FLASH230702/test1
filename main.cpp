#include <iostream>
#include <algorithm>

bool isVowel(char ch) {
    return std::find("aeiouAEIOU", ch) != std::string::npos;
}

bool containsAllVowels(const std::string& str) {
    std::string lowerStr = str;
    std::transform(lowerStr.begin(), lowerStr.end(), lowerStr.begin(), ::tolower);

    for (char vowel : "aeiou") {
        if (lowerStr.find(vowel) == std::string::npos) {
            return false;
        }
    }

    return true;
}

int main() {
    std::string inputString = "This is a sample string with all vowels";
    
    if (containsAllVowels(inputString)) {
        std::cout << "The string contains all vowels." << std::endl;
    } else {
        std::cout << "The string does not contain all vowels." << std::endl;
    }

    return 0;
}

//
// ArrayOfArrayOfNumberOnly.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

public struct ArrayOfArrayOfNumberOnly: Codable {
    public var arrayArrayNumber: [[Double]]?

    public init(arrayArrayNumber: [[Double]]?) {
        self.arrayArrayNumber = arrayArrayNumber
    }

    public enum CodingKeys: String, CodingKey {
        case arrayArrayNumber = "ArrayArrayNumber"
    }
}

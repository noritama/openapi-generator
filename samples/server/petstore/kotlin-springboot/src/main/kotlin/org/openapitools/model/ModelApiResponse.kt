package org.openapitools.model

import java.util.Objects
import com.fasterxml.jackson.annotation.JsonProperty
import javax.validation.Valid
import javax.validation.constraints.*
import io.swagger.annotations.ApiModelProperty

/**
 * Describes the result of uploading an image resource
 * @param code 
 * @param type 
 * @param message 
 */
data class ModelApiResponse (

        @ApiModelProperty(value = "")
        @JsonProperty("code") val code: kotlin.Int? = null,

        @ApiModelProperty(value = "")
        @JsonProperty("type") val type: kotlin.String? = null,

        @ApiModelProperty(value = "")
        @JsonProperty("message") val message: kotlin.String? = null
) {

}


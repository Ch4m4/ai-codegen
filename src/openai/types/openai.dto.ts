import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import {
  CreateCompletionRequestPrompt,
  CreateCompletionResponse,
  CreateCompletionResponseChoicesInner,
  CreateCompletionResponseChoicesInnerLogprobs,
  CreateCompletionResponseUsage,
} from 'openai';

export class CreateCompletionRequestDTO {
  @IsString({ each: true })
  prompt: CreateCompletionRequestPrompt;
}

export class CreateCompletionResponseDTO implements CreateCompletionResponse {
  prompt: CreateCompletionRequestPrompt;
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<CreateCompletionResponseChoicesInner>;
  usage?: CreateCompletionResponseUsage;
}

export class CreateEditRequestDTO {
  @IsString()
  input: string;

  @IsString()
  instruction: string;
}

// class CreateCompletionResponseChoicesInnerDTO
//   implements CreateCompletionResponseChoicesInner
// {
//   @IsString()
//   text?: string;
//
//   @IsNumber()
//   index?: number;
//
//   @ValidateNested()
//   logprobs?: CreateCompletionResponseChoicesInnerLogprobs | null;
//
//   @IsString()
//   finish_reason?: string;
// }
//
// class CreateCompletionResponseChoicesInnerLogprobsDTO {
//   @IsArray()
//   tokens?: Array<string>;
//
//   @IsArray()
//   @IsNumber({}, { each: true })
//   token_logprobs?: Array<number>;
//
//   @IsArray()
//   top_logprobs?: Array<object>;
//
//   @IsArray()
//   @IsNumber({}, { each: true })
//   text_offset?: Array<number>;
// }
//
// class CreateCompletionResponseUsageDTO {
//   @IsNumber()
//   prompt_tokens: number;
//
//   @IsNumber()
//   completion_tokens: number;
//
//   @IsNumber()
//   total_tokens: number;
// }

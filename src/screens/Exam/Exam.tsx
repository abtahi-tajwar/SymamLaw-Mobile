import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import useAppTheme from "../../hooks/useAppTheme";
import { ScreenContainer } from "../../components";
import BottomDrawer from "../../atoms/Drawer/BottomDrawer";
import CustomText from "../../atoms/CustomText/CustomText";
import PrimaryButton from "../../atoms/Button/PrimaryButton";
import dummyQuestionsData from "./dummyExam.json";
import { Checkbox, Divider, Paragraph, TextInput } from "react-native-paper";
import { formatSecondToHour } from "../../utils/helpers";
import {
  AttachmentIcon,
  CaretLeftIcon,
  CaretRightIcon,
  DeleteIcon,
} from "../../assets/Icons";
import { ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { IconButtonCustom, InputUnderlined } from "../../atoms";
import * as DocumentPicker from "expo-document-picker";

type CustomQuestionData = Store.ExamQuestion & {
  option_id?: Array<string>;
  written_answer?: string;
  written_file?: Array<DocumentPicker.DocumentPickerAsset>;
};
type ScreenType = "exam" | "confirmation";
export default function Exam() {
  const [currentScreen, setCurrentScreen] =
    useState<ScreenType>("confirmation");
  return currentScreen === "exam" ? <ExamScreen /> : <ExamConfirmationScreen />;
}
function ExamScreen() {
  const theme = useAppTheme();
  const styles = createStyles({ theme });
  const [openBottomDrawer, setOpenBottomDrawer] = useState(false);
  const [questions, setQuestions] = useState<CustomQuestionData[]>(
    dummyQuestionsData as Store.ExamQuestion[]
  );
  const initialTime = 10000;
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<CustomQuestionData>(
    dummyQuestionsData[0] as Store.ExamQuestion
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    let interval: any = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const moveToSelectedQuestion = (id: number) => {
    const selectedQuestion = questions.find((q) => q.id === id);
    if (selectedQuestion) setCurrentQuestion(selectedQuestion);
  };

  const handleMCQAnswerChange = (
    id: number,
    data:
      | {
          type: "single";
          value: string;
        }
      | { type: "multiple"; value: Array<string> }
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          if (data.type === "single") {
            return {
              ...q,
              option_id: [data.value],
            };
          } else {
            return {
              ...q,
              option_id: data.value,
            };
          }
        }
        return q;
      })
    );
  };

  const handleWrittenAnswer = (
    id: number,
    data: {
      textAnswer?: string;
      attachments?: DocumentPicker.DocumentPickerAsset[];
    }
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return {
            ...q,
            written_answer: data.textAnswer,
            written_file: data.attachments,
          };
        }
        return q;
      })
    );
  };

  const checkIfAnswered = (question: CustomQuestionData) => {
    let answered = false;
    if (question.question_type === "mcq") {
      answered =
        question.option_id && question.option_id?.length !== 0 ? true : false;
    } else {
      answered =
        question.written_answer ||
        (question.written_file && question.written_file.length !== 0)
          ? true
          : false;
    }
    return answered;
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);
  useEffect(() => {
    console.log("Current Question", currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    console.log(
      "Questions",
      questions.map((q) => ({
        option_id: q.option_id,
        written_answer: q.written_answer,
        written_file: q.written_file,
      }))
    );
  }, [questions]);

  return (
    <View
      className="p-3 flex-1"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex flex-row">
        <CustomText variant="500">Time Left</CustomText>
        <CustomText className="ml-auto">{formatSecondToHour(time)}</CustomText>
      </View>
      <View className="flex-1 p-3 mt-3 border-t-slate-300 border-t-[1px]">
        <View className="flex flex-row items-center justify-between mb-6">
          <View>
            {currentQuestionIndex > 0 && (
              <PrimaryButton
                icon={
                  <CaretLeftIcon color={theme.colors.textLight} scale={0.5} />
                }
                text="PREV"
                color="primary"
                onPress={moveToPreviousQuestion}
              />
            )}
          </View>
          {currentQuestionIndex < questions.length - 1 && (
            <PrimaryButton
              endIcon={<CaretRightIcon color={theme.colors.textLight} />}
              text="NEXT"
              color="primary"
              onPress={moveToNextQuestion}
            />
          )}
        </View>
        <ScrollView>
          <CustomText variant="500" className="text-lg">
            {currentQuestion.question_text}
          </CustomText>
          <CustomText>{currentQuestion.description}</CustomText>
          <View className="mt-5">
            {currentQuestion.question_type === "mcq" ? (
              <MCQOptionsView
                onChange={(data) =>
                  handleMCQAnswerChange(currentQuestion.id, data)
                }
                options={currentQuestion.option}
                type={
                  currentQuestion.multiple_answer === 1 ? "multiple" : "single"
                }
                defaultValue={currentQuestion.option_id ?? null}
              />
            ) : (
              <WrittenQuestionResponseField
                defaultValue={{
                  textAnswer: currentQuestion.written_answer,
                  attachments: currentQuestion.written_file,
                }}
                onChange={(data) =>
                  handleWrittenAnswer(currentQuestion.id, data)
                }
              />
            )}
          </View>
        </ScrollView>
      </View>
      <View className="flex flex-row gap-2">
        <View className="flex-1">
          <PrimaryButton
            // className="flex-1"
            text="View Questions"
            onPress={() => setOpenBottomDrawer(true)}
            color="primary"
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            className="w-full"
            text="Submit"
            style={{
              borderColor: theme.colors.primary,
              borderWidth: 1,
            }}
            // onPress={() => setOpenBottomDrawer(true)}
            // color="primary"
          />
        </View>
      </View>
      <BottomDrawer open={openBottomDrawer} setOpen={setOpenBottomDrawer}>
        <View className="pt-3">
          <CustomText variant="600" className="mb-3 text-lg">
            Question List
          </CustomText>
          <View className="flex flex-row flex-wrap gap-2">
            {questions.map((question, i) => (
              <View
                key={question.id}
                className="relative h-[60px] w-[60px] rounded flex justify-center items-center"
                style={{
                  backgroundColor:
                    question.id === currentQuestion.id
                      ? theme.colors.primary
                      : theme.colors.primaryLight[1],
                }}
                onTouchEnd={() => moveToSelectedQuestion(question.id)}
              >
                <CustomText lightText>{`${i}`}</CustomText>
                <View
                  className={`absolute w-[87%] h-1 rounded bottom-1 left-1`}
                  style={{
                    backgroundColor: checkIfAnswered(question)
                      ? theme.colors.success
                      : theme.colors.primaryGray,
                  }}
                ></View>
              </View>
            ))}
          </View>
        </View>
      </BottomDrawer>
    </View>
  );
}
function ExamConfirmationScreen() {
  const theme = useAppTheme();
  return (
    <View className="flex-1 bg-white justify-center p-12">
      <View className="mx-auto flex flex-row gap-2">
        <View className="flex-1">
          <PrimaryButton
            text="Cancel"
            style={{
              borderColor: theme.colors.primary,
              borderWidth: 1,
            }}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton text="Confirm" color="primary" />
        </View>
      </View>
    </View>
  );
}

type MCQOptionsType = "single" | "multiple";
type MCQOptionsViewProps = {
  onChange?: (
    data:
      | {
          type: "single";
          value: string;
        }
      | { type: "multiple"; value: Array<string> }
  ) => void;
  type: MCQOptionsType;
  defaultValue?: string[] | null;
  options: {
    id: number;
    question_id: number;
    option_text: string;
    slug: string;
    is_correct: number;
    created_at: string;
    updated_at: string;
  }[];
};
function MCQOptionsView({
  onChange,
  type,
  options,
  defaultValue,
}: MCQOptionsViewProps) {
  const [selectedSingleAnswer, setSelectedSingleAnswer] = useState<string>("");
  // console.log("Selected answer", selectedSingleAnswer, defaultValue);
  const [multipleAnswerOptions, setMutlipleAnswerOptions] = useState<
    Array<{
      id: number;
      option_text: string;
      selected: boolean;
    }>
  >([]);

  useEffect(() => {
    setSelectedSingleAnswer(
      type === "single" ? (defaultValue ? defaultValue[0] : "") : ""
    );
  }, [defaultValue]);
  // function intializeMultipleAnswerFromDefaultValue (type : MCQOptionsType, defaultValue: string[] | null | undefined) {
  //   if (type === "multiple") {
  //     if (!defaultValue) return []
  //     else {
  //       return options.map(option => ({
  //         id: option.id,
  //         option_text: option.option_text,
  //         selected: defaultValue.find(v => v === `${option.id}`) ? true : false
  //       }))
  //     }
  //   } else {
  //     return []
  //   }
  // }
  useEffect(() => {
    if (type === "multiple") {
      setMutlipleAnswerOptions(
        options.map((option) => ({
          id: option.id,
          option_text: option.option_text,
          selected: defaultValue?.find((v) => v === `${option.id}`)
            ? true
            : false,
        }))
      );
    }
  }, []);
  const handleRadioChange = (value: string) => {
    setSelectedSingleAnswer(value);
    if (onChange) onChange({ type: "single", value });
  };
  const handleCheckboxChange = (id: number) => {
    var selectedOptions: Array<string> = [];
    setMutlipleAnswerOptions(
      multipleAnswerOptions.map((option) => {
        if (option.id === id) {
          if (!option.selected) {
            selectedOptions.push(`${id}`);
          }
          return {
            ...option,
            selected: !option.selected,
          };
        } else if (option.selected) selectedOptions.push(`${option.id}`);
        return option;
      })
    );
    if (onChange)
      onChange({
        type: "multiple",
        value: selectedOptions,
      });
  };
  return type === "single" ? (
    <View className="p-4 flex gap-2">
      <RadioButton.Group
        value={selectedSingleAnswer}
        onValueChange={handleRadioChange}
      >
        {options.map((option) => (
          <View key={option.id} className="flex flex-row gap-2">
            <RadioButton value={`${option.id}`} />
            <CustomText>{option.option_text}</CustomText>
          </View>
        ))}
        <View className="flex flex-row gap-2">
          <RadioButton value="2" />
          <CustomText>Option 2</CustomText>
        </View>
      </RadioButton.Group>
    </View>
  ) : (
    <View className="flex flex-col gap-2">
      {multipleAnswerOptions.map((option) => (
        <View key={option.id} className="flex flex-row gap-2">
          <Checkbox
            onPress={() => handleCheckboxChange(option.id)}
            status={option.selected ? "checked" : "unchecked"}
          />
          <CustomText>{option.option_text}</CustomText>
        </View>
      ))}
    </View>
  );
}

type WrittenQuestionResponse = {
  textAnswer?: string;
  attachments?: DocumentPicker.DocumentPickerAsset[];
};
type WrittenQuestionResponseFieldProp = {
  onChange: (data: WrittenQuestionResponse) => void;
  defaultValue?: WrittenQuestionResponse;
};
function WrittenQuestionResponseField({
  onChange,
  defaultValue,
}: WrittenQuestionResponseFieldProp) {
  const theme = useAppTheme();
  const [assetList, setAssetList] = useState<
    DocumentPicker.DocumentPickerAsset[]
  >([]);
  const [answer, setAnswer] = useState<{
    textAnswer?: string;
    attachments?: DocumentPicker.DocumentPickerAsset[];
  }>({
    textAnswer: "",
    attachments: [],
  });

  const handleDocumentSelection = async () => {
    try {
      const response: DocumentPicker.DocumentPickerResult =
        await DocumentPicker.getDocumentAsync({
          multiple: true,
        });
      if (!response.canceled) {
        const _assets = [
          ...assetList,
          ...response.assets.map((asset) => asset),
        ];
        setAssetList(_assets);
        setAnswer({
          ...answer,
          attachments: _assets,
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const deleteAttachment = (index: number) => {
    const _assets = assetList.filter((asset, i) => index !== i);
    setAssetList(_assets);
    setAnswer({
      ...answer,
      attachments: _assets,
    });
  };

  const handleTextAnswerChange = (value: string) => {
    setAnswer({
      ...answer,
      textAnswer: value,
    });
  };

  useEffect(() => {
    if (onChange) onChange(answer);
  }, [answer]);

  useEffect(() => {
    console.log("Default value", defaultValue);
    if (defaultValue) {
      setAnswer({
        textAnswer: defaultValue.textAnswer,
        attachments: defaultValue.attachments,
      });
      if (defaultValue.attachments) {
        setAssetList(defaultValue.attachments);
      }
    }
  }, []);

  return (
    <View>
      <TextInput
        multiline={true}
        numberOfLines={5}
        value={answer.textAnswer}
        placeholder="Answer your question here or add as an attachment."
        onChangeText={handleTextAnswerChange}
      />
      <View className="mt-3">
        <PrimaryButton
          onPress={handleDocumentSelection}
          icon={<AttachmentIcon />}
          text="Add Attachment"
          color="primary"
        />
      </View>
      {assetList.length !== 0 && (
        <View className="mt-3">
          <CustomText>Uploaded Files</CustomText>
          {assetList.map((file, i) => (
            <View
              key={file.uri}
              className="flex flex-row justify-between gap-2 items-center p-3 pr-0 border-b-[1px]"
              style={{ borderColor: theme.colors.primaryGrayLight }}
            >
              <View className="flex flex-row gap-2 items-center w-[200px]">
                <AttachmentIcon color={theme.colors.primary} />
                <CustomText variant="300i">{file.name}</CustomText>
              </View>
              <PrimaryButton
                onPress={() => deleteAttachment(i)}
                icon={<DeleteIcon color={theme.colors.error} />}
                text=""
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const createStyles = ({ theme }: { theme: Config.Theme }) => {
  return StyleSheet.create({});
};

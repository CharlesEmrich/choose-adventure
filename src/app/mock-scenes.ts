import { Scene } from './scene/scene.model';

export const SCENES: Scene[] = [
    new Scene(1, 'The Woods', 'Some facts about the woods which prompt user action.', [[2, 'Go to City'], [3, 'Go, ill-advisedly, to Space.']]),
    new Scene(2, 'The City', 'Some facts about the city which prompt user action.', [[1, 'Go to Woods'], [3, 'Go, ill-advisedly, to Space.']]),
    new Scene(3, 'Space', 'Some facts about the space which prompt user action.', [[2, 'Get outta space! To City!'], [1, 'Go back to Woods.']])
];

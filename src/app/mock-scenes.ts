import { Scene } from './scene/scene.model';

export const SCENES: Scene[] = [
    new Scene(1, 'The Woods', 'Some facts about the woods which prompt user action.', [[2, 'Get outta these woods'], [3, 'Go, ill-advisedly, deeper into these woods.']]),
    new Scene(2, 'The City', 'Some facts about the city which prompt user action.', [[2, 'Get outta this city'], [3, 'Go, ill-advisedly, deeper into this city.']]),
    new Scene(3, 'Space', 'Some facts about the space which prompt user action.', [[2, 'Get outta space!'], [1, 'Go, ill-advisedly, deeper into space.']])
];

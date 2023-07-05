export function taskFirst(){
	var task = 'I prefer const when I can.';
	return task;
}

export function getLast(){
	return 'is okay';
}

export function taskNext(){
	var task2 = 'But sometimes let';
	task2 += getLast();

	return task2;
}

/**
 * 할 일 객체
 * @typedef {Object} TodoItem
 * @property {number | string} id - 아이디
 * @property {string} desc - 내용
 * @property {boolean} isDone - 완료 여부
 * @property {string} category - 카테고리
 * @property {Array<string>} [tags] - 태그들
 */

/**
 * 할 일 목록
 * @typedef {TodoItem[]} TodoList
 */

/**
 * 수정 할 할일 정보
 * @typedef {Object} updateTodoItem
 * @property {string} [desc] - 내용
 * @property {boolean} [isDone] - 완료 여부
 * @property {string} [category] - 카테고리
 * @property {Array<string>} [tags] - 태그들
 */

/**
 * 수정 할 특정 태그 정보
 * @typedef {Object} updateTagItem
 * @property {number} idx - 태그 인덱스
 * @property {string} tag - 태그 내용
 */

/**
 * 삭제 할 특정 태그 정보
 * @typedef {Object} deleteTagItem
 * @property {number} idx - 태그 인덱스
 * @property {string} [tag] - 태그 내용
 */

/**
 * 할 일 생성자
 * @constructor
 * @returns {TodoItem} - todo 객체.
 */
function Todo(id, desc, isDone, category, tags) {}

/**
 * 할 일 추가 메서드
 * - 할 일을 추가할 수 있다.
 * - 내용없이 추가할 수 없다.
 * @param {TodoItem} todo - todo 객체
 * @returns void
 */
Todo.prototype.addItem = (todo) => {};

/**
 * 할 일 조회 메서드
 * - 모든 할 일을 조회할 수 있다.
 * - ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number | string} [id] - todo 아이디 입력시 특정 할일 조회 미입력시 전체조회
 * @returns Todo | TodoList - todo 객체 또는 todo 리스트
 */
Todo.prototype.find = (id) => {};

/**
 * 할 일 수정 메서드
 * - ID를 제외한 모든 속성을 수정할 수 있다.
 * - 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number | string} id - 수정 할 todo 아이디
 * @param {updateTodoItem | updateTagItem} updateInfo - 수정 할 정보
 * @returns TodoList - todo 리스트
 */
Todo.prototype.update = (id, updateInfo) => {};

/**
 * 할 일 삭제 메서드
 * - ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * - 모든 할 일을 제거할 수 있다.
 * - 특정 할 일의 특정 태그를 삭제할 수 있다.
 * - 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number | string} [id] - todo 아이디 입력 시 특정 todo 삭제, 미입력시 전체삭제
 * @param {deleteTagItem} [deleteInfo] - 삭제할 태그 인덱스만 입력 시 모든 태그 삭제, 인덱스 입력시 특정 태그 삭제
 * @returns void
 */
Todo.prototype.delete = (id, deleteInfo) => {};

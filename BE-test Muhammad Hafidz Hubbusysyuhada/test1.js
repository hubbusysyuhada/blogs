/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
  // Your Code Here
  let result = []

  for (let i = 0; i < sessions.length; i++) {
    if (result.length === 0) result.push({
      session_id: sessions[i].session_id,
      time: sessions[i].time,
      classes: []
    })
    let flag = true
    for (let j = 0; j < result.length; j++) {
      if (result[j].session_id === sessions[i].session_id) {
        flag = false
        let classCheck = true
        if(result[j].classes.length === 0) result[j].classes.push({
          class_id: sessions[i].class.class_id,
          name: sessions[i].class.name,
          students: [{student_id: sessions[i].student.student_id, name: sessions[i].student.name}]
        })
        else {
          let classes = result[j].classes
          for (let c = 0; c < classes.length; c++) {
            if (classes[c].class_id === sessions[i].class.class_id) {
              classes[c].students.push({student_id: sessions[i].student.student_id, name: sessions[i].student.name})
              classCheck = false
            }
          }
          if (classCheck) result[j].classes.push({
              class_id: sessions[i].class.class_id,
              name: sessions[i].class.name,
              students: [{student_id: sessions[i].student.student_id, name: sessions[i].student.name}]
            })
        }
      }
    }
    if (flag) result.push({
      session_id: sessions[i].session_id,
      time: sessions[i].time,
      classes: []
    })
    console.log(sessions[i]);
  }

  return JSON.stringify(result)
}

console.log(result(sessions));

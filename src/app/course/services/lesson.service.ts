import { Injectable } from '@angular/core';

import { lessons, lessonSidebar } from '../activities';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  public lessons = lessons;
  public lessonSidebar = lessonSidebar;

  public findLesson(lessonId) {
    return this.lessons.find(lesson => lesson.id === lessonId);
  }

  public findActivity(activityId: any, lesson: any) {
    return lesson && lesson.activities.find(activity => activity.id === activityId);
  }

  public findLessonActivity(lessonId: any, activityId: any) {
    const lesson = this.findLesson(lessonId);

    return this.findActivity(activityId, lesson);

  }
}

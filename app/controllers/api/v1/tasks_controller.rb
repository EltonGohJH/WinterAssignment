module Api
  module V1
    class TasksController < ApplicationController
      before_action :authenticate_api_v1_user!
      def index 
        @tasks = Task.order("deadline desc")
        render json: @tasks
      end

      def create
        @task = current_api_v1_user.tasks.create!(task_params)
        render json: @task
      end

      def destroy
        @task = Task.find(params[:id])
        task.destroy
        head :no_content, status: :ok
      end
                









      private
      def task_params
          params.require(:task).permit(:title, :description, :start_time, :deadline, :completed_time, :completed)
      end
    end
  end
end
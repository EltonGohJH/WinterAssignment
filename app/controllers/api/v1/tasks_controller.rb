module Api
  module V1
    class TasksController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index 
        @tasks = current_api_v1_user.tasks.order('id DESC')
        render json: @tasks
      end

      def create
        @task = current_api_v1_user.tasks.create(task_params)
        if @task.save
          render json: @task, status: :created
        else
          render json: @task.errors, status: unprocessable_entity
        end
      end

      def destroy
        @task = current_api_v1_user.tasks.find(params[:id])
        @task.destroy
        head :no_content, status: :ok
        rescue ActiveRecord::RecordNotDestroyed
          render json: {status: "error", code: 4000, message: "There is an error. Please try again."}
      end
                
      def update
        @task = current_api_v1_user.tasks.find(params[:id])
        @task.update(task_params)
        if @task.update(task_params)
          render json: @task
        else
          render json: @task.errors, status: :unprocessable_entity
        end
      end


      private
      def task_params
          params.require(:task).permit(:title, :description, :start_time, :deadline, :completed_time, :completed, :tags)
      end
    end
  end
end